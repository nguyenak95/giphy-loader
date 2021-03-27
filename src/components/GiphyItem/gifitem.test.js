import React from "react"
import { render } from "@testing-library/react"
import GiphyItem from "./index"
import { GuestLogo, EyeLogo } from "../../assets/icons"

describe("render child Gif correctly", () => {
  const fullInfoGif = {
    id: "Full Info",
    title: "First full Info gif",
    images: {
      downsized_still: {
        url: "fullinfoUrl",
      },
    },
    user: {
      display_name: "User 1",
      avatar_url: EyeLogo,
      username: "user01",
    },
  }
  const noUserGif = {
    id: "no user gif",
    title: "No User gif",
    images: {
      downsized_still: {
        url: "nouserURL",
      },
    },
  }
  it("render IMG GIF and Author name exactly", () => {
    const { getByAltText, container } = render(<GiphyItem gif={fullInfoGif} />)
    const img = getByAltText(fullInfoGif.title)
    const author = container.querySelector(".gif-item__author-name")
    const authorImg = author.querySelector("img")

    expect(img).toHaveAttribute("src", fullInfoGif.images.downsized_still.url)
    expect(img).toHaveAttribute("alt", fullInfoGif.title)

    expect(author).toHaveTextContent(fullInfoGif.user.display_name)
    expect(authorImg).toHaveAttribute("src", fullInfoGif.user.avatar_url)
    expect(authorImg).toHaveAttribute("alt", fullInfoGif.user.username)
  })
  it("render activity count exactly", () => {
    const { getByAltText } = render(<GiphyItem gif={fullInfoGif} />)
    const heart = getByAltText("heart").nextSibling
    const conversation = getByAltText("conversation").nextSibling
    const eye = getByAltText("eye").nextSibling

    for (let ele of [heart, conversation, eye]) {
      expect(parseInt(ele.innerHTML)).toBeGreaterThan(5000)
      expect(parseInt(ele.innerHTML)).toBeLessThanOrEqual(8000)
    }
  })
  it("render Guest if author missing", () => {
    const { container } = render(<GiphyItem gif={noUserGif} />)
    const img = container.querySelector(".gif-item__author-name img")

    expect(img).toHaveAttribute("src", GuestLogo)
    expect(img).toHaveAttribute("alt", "guest user")
    expect(container).toHaveTextContent("Guest")
  })
})
