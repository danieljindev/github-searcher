import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import App from "../../../App"

test("Render Navbar Component.", () => {
    render(<App />)

    const searchBox = screen.getByPlaceholderText(/Search Users.../i)
    const searchButton = screen.getByTestId(/searchbutton/i)

    expect(searchBox).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()
})

test("Types into the search box", () => {
    render(<App />)

    const searchBox = screen.getByPlaceholderText(/Search Users.../i)

    userEvent.type(searchBox, 'danieljindev')

    expect(searchBox.value).toBe('danieljindev')
})

test("Types into the search box and clicks search button", async () => {
    render(<App />)

    const searchBox = screen.getByPlaceholderText(/Search Users.../i)
    const searchButton = screen.getByTestId(/searchbutton/i)

    userEvent.type(searchBox, 'danieljindev')
    userEvent.click(searchButton)

    expect(await screen.getByAltText(/Loading.../i)).toBeInTheDocument();
})
