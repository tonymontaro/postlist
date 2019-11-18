import axios from "axios";
import Vuex from "vuex";
import { createLocalVue, mount, shallowMount } from "@vue/test-utils";

import Posts from "@/components/Posts";
import postStore from "@/store/posts";
import { POST_URL } from "@/config";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Posts Component", () => {
  let testPosts;
  let store;
  let actions;
  let mutations;
  let wrapper;

  beforeEach(() => {
    testPosts = [
      { id: 7, title: "7" },
      { id: 42, title: "42" },
      { id: 1, title: "1" },
      { id: 2, title: "2" }
    ];
    actions = { "posts/getPosts": jest.fn() };
    mutations = { "history/addHistory": jest.fn() };
    store = new Vuex.Store({
      state: {
        posts: {
          posts: testPosts
        }
      },
      actions,
      mutations
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test("renders post items", async () => {
    wrapper = shallowMount(Posts, {
      localVue,
      store,
      computed: {
        storePosts: () => testPosts
      }
    });

    await localVue.nextTick();
    expect(wrapper.findAll("post-stub").length).toBe(4);
    expect(actions["posts/getPosts"]).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });

  test("swap method can swap two items in an array", () => {
    const { swap } = Posts.methods;
    const arr = [1, 2, 3, 4];
    const [firstIdx, secondIdx] = [0, 3];

    swap(arr, firstIdx, secondIdx);

    expect(arr).toEqual([4, 2, 3, 1]);
  });

  test("clicking the up/down arrow buttons adds action to history", async () => {
    wrapper = mount(Posts, {
      localVue,
      store,
      computed: {
        storePosts: () => [...testPosts]
      },
      methods: {
        swap: jest.fn()
      }
    });

    await localVue.nextTick();
    wrapper.find(".chevron-up").trigger("click");
    expect(mutations["history/addHistory"]).toHaveBeenCalledTimes(1);
    wrapper.find(".chevron-down").trigger("click");
    expect(mutations["history/addHistory"]).toHaveBeenCalledTimes(2);
  });
});

describe("Methods", () => {
  let store;
  let actions;
  let state;

  beforeEach(() => {
    state = { posts: { posts: [] } };
    actions = { "posts/getPosts": jest.fn() };
    store = new Vuex.Store({
      state,
      actions
    });
  });

  test("getPosts calls the getPosts action", () => {
    const expected = [{ id: 1, title: "Title" }];
    axios.get.mockResolvedValue({ data: expected });
    const wrapper = mount(Posts, {
      localVue,
      store
    });

    expect(actions["posts/getPosts"]).toHaveBeenCalledTimes(1);
  });
});

describe("Store", () => {
  test("store loads successfully", () => {
    const store = new Vuex.Store({
      state: { posts: { posts: [] } },
      actions: { "posts/getPosts": jest.fn() }
    });
    const wrapper = mount(Posts, {
      localVue,
      store
    });
    expect(wrapper.vm.posts).toHaveLength(0);
  });

  test("action.getPosts makes api get request", async () => {
    const { getPosts } = postStore.actions;
    const expected = [{ id: 1, title: "Title" }];
    axios.get.mockResolvedValue({ data: expected });

    const res = await getPosts({ commit: () => {} });

    expect(res).toEqual(expected);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(POST_URL);
  });

  test("mutations.getPostsSuccess sets the state to first five items", () => {
    const { getPostsSuccess } = postStore.mutations;
    const vuexState = { posts: [] };
    const posts = [1, 2, 3, 4, 5, 6, 7];
    const expected = [1, 2, 3, 4, 5];

    getPostsSuccess(vuexState, posts);
    expect(vuexState.posts).toEqual(expected);
  });
});
