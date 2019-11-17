import { mount } from "@vue/test-utils";

import Post from "@/components/Post";

describe("Component", () => {
  test("renders post item", () => {
    const wrapper = mount(Post, {
      propsData: {
        post: { id: 1, title: "Title" }
      }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
