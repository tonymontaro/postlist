import axios from "axios";
import Vuex from "vuex";
import { createLocalVue, mount } from "@vue/test-utils";

import Posts from "@/components/Posts";
import postStore from "@/store/posts";
import { postUrl } from "@/config";

const localVue = createLocalVue();
localVue.use(Vuex);

const state = { posts: { posts: [] } };
const actions = { "posts/getPosts": jest.fn() };
const mutations = { "posts/getPostsSuccess": jest.fn() };

describe("Store", () => {
  test("store loads successfully", () => {
    const store = new Vuex.Store({
      actions,
      state,
      mutations
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
    expect(axios.get).toHaveBeenCalledWith(postUrl);
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
