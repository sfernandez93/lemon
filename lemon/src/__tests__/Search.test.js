/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";

import SearchInput from "../components/Search/SearchInput";
import SearchBar from "../components/Search/SearchBar";
import SearchResultImage from "../components/Search/SearchResultImage";
import SearchResultInfo from "../components/Search/SearchResultInfo";

it("should render the component SearchInput onto the screen", () => {
  render(<SearchInput />);
  expect(screen.getByTestId("search-input")).toBeInTheDocument();
});

it("should render the component SearchBar onto the screen", () => {
  render(<SearchBar />);
  expect(screen.getByTestId("search-bar")).toBeInTheDocument();
});

it("should render the component SearchResultImage onto the screen", () => {
  render(<SearchResultImage />);
  expect(screen.getByTestId("search-result-image")).toBeInTheDocument();
});

it("should render the component SearchResultInfo onto the screen", () => {
  render(<SearchResultInfo />);
  expect(screen.getByTestId("search-result-info")).toBeInTheDocument();
});
