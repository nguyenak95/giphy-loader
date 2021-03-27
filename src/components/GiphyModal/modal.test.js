import React from "react"
import { fireEvent, render } from "@testing-library/react"
import { EyeLogo } from "../../assets/icons"
import GiphyModal from "./index"

describe("render child Gif correctly", () => {
  const fullInfoGif = {
    id: "Full Info",
    title: "First full Info gif",
    images: {
      original: {
        url: "fullinfoUrl",
      },
    },
    user: {
      display_name: "User 1",
      avatar_url: EyeLogo,
      username: "user01",
    },
  }
  
  const onCloseMock = jest.fn()
  it("handle click overlay and close button", () => {
    const { container } = render(<GiphyModal gif={fullInfoGif} onClose={onCloseMock} />)
    const overlay = container.querySelector('.modal__overlay')
    const closeBtn = container.querySelector('.modal__close-btn')
    fireEvent.click(overlay)
    expect(onCloseMock).toBeCalled()
    fireEvent.click(closeBtn)
    expect(onCloseMock).toBeCalledTimes(2)
  })
  it("display selected img exactly", () => {
    const { container } = render(<GiphyModal gif={fullInfoGif} onClose={onCloseMock} />)
    const img = container.querySelector('img')
    expect(img).toHaveAttribute("src", fullInfoGif.images.original.url)
    expect(img).toHaveAttribute("alt", fullInfoGif.title)
  })
  // it("handle")

})
