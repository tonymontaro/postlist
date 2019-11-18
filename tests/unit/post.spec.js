import { mount } from "@vue/test-utils";

import Post from "@/components/Post";

describe("Post Component", () => {
  test("renders post item with up and down links", () => {
    const wrapper = mount(Post, {
      propsData: {
        key: 1,
        post: { id: 1, title: "Title" },
        index: 3,
        moveUp: () => {},
        moveDown: () => {},
        isLastPost: false
      }
    });

    expect(wrapper.findAll("a")).toHaveLength(2);
    expect(wrapper).toMatchSnapshot();
  });
});
