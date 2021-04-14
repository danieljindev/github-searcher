import { render, screen } from "@testing-library/react"

import App from "../../../App"

test("Render Navbar Component.", () => {
    render(<App />)

    const navTitleElement = screen.getByText(/Github Finder/i)
    const homeLinkElement = screen.getByText(/Home/i)
    const aboutLinkElement = screen.getByText(/About/i)

    expect(navTitleElement).toBeInTheDocument()
    expect(homeLinkElement).toBeInTheDocument()
    expect(aboutLinkElement).toBeInTheDocument()
})
