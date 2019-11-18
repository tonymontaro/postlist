import Vuex from "vuex";
import { createLocalVue, mount, shallowMount } from "@vue/test-utils";

import History from "@/components/History";
import historyStore from "@/store/history";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("History Component", () => {
  let testHistoryItems;
  let store;
  let mutations;
  let wrapper;

  beforeEach(() => {
    testHistoryItems = [
      { id: 7, word: "Item 7 moved", prevState: [] },
      { id: 42, word: "Item 42 moved", prevState: [] },
      { id: 1, word: "Item 1 moved", prevState: [] },
      { id: 2, word: "Item 2 moved", prevState: [] }
    ];
    mutations = {
      "history/addAction": jest.fn(),
      "posts/replyHistory": jest.fn()
    };
    store = new Vuex.Store({
      state: {
        history: {
          history: testHistoryItems
        }
      },
      mutations
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test("renders history items", async () => {
    wrapper = shallowMount(History, {
      localVue,
      store,
      computed: {
        history: () => testHistoryItems
      }
    });
    expect(wrapper.findAll("historyitem-stub").length).toBe(4);
    expect(wrapper).toMatchSnapshot();
  });
});
