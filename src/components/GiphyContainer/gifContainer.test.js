import React from "react"
import {
  render,
} from "@testing-library/react"
import GiphyContainer from "./index"

describe("render child Gif correctly", () => {
  const gifList = [
    {
      id: "First Gif",
      images: {
        downsized_still: {},
      },
    },
    {
      id: "Second Gif",
      images: {
        downsized_still: {},
      },
    },
  ]
  it("render given list", () => {
    const { container } = render(<GiphyContainer gifList={gifList} />)
    expect(
      container.querySelector(`[data-id='${gifList[0].id}']`),
    ).toBeInTheDocument()
    expect(
      container.querySelector(`[data-id='${gifList[1].id}']`),
    ).toBeInTheDocument()
  })
})
