import { mount } from "@vue/test-utils";

import Action from "@/components/HistoryItem";

describe("HistoryItem Component", () => {
  test("renders post item with up and down links", () => {
    const wrapper = mount(Action, {
      propsData: {
        historyItem: {
          word: "Moved post 1 from index 1 to index 2",
          prevState: []
        },
        replyHistory: () => {}
      }
    });

    expect(wrapper.findAll("button")).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
