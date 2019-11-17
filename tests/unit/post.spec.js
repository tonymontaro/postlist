import { mount } from "@vue/test-utils";

import Post from "@/components/Post";

describe("Component", () => {
  test("renders post item", () => {
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

    expect(wrapper).toMatchSnapshot();
  });
});
