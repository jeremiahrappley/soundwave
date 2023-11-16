import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('NavBar', () => {
  test('renders NavBar component without crashing', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    );
  });

  test('renders the correct title', () => {
    render(
		<Router>
            <NavBar />
        </Router>
	);
    const titleElement = screen.getByText(/Jeremiah Rappley/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the correct links', () => {
    render(
		<Router>
			<NavBar />
		</Router>
	);
    const linkElement2023 = screen.getByText(/2023/i);
    const linkElement2022 = screen.getByText(/2022/i);
    const linkElement2021 = screen.getByText(/2021/i);
    const linkElement2020 = screen.getByText(/2020/i);
    const linkElement2019 = screen.getByText(/2019/i);
    const linkElement2018 = screen.getByText(/2018/i);
    expect(linkElement2023).toBeInTheDocument();
    expect(linkElement2022).toBeInTheDocument();
    expect(linkElement2021).toBeInTheDocument();
    expect(linkElement2020).toBeInTheDocument();
    expect(linkElement2019).toBeInTheDocument();
    expect(linkElement2018).toBeInTheDocument();
  });
});