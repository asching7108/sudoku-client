import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../components/App/App';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';

describe(`App Component`, () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<BrowserRouter>
				<App />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	})
})

describe(`Header Component`, () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	})

	it('renders the UI as expected', () => {
		const wrapper = shallow(<Header />);
		expect(toJson(wrapper)).toMatchSnapshot();
	})
})

describe(`Footer Component`, () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Footer />, div);
		ReactDOM.unmountComponentAtNode(div);
	})

	it('renders the UI as expected', () => {
		const wrapper = shallow(<Footer />);
		expect(toJson(wrapper)).toMatchSnapshot();
	})
})

describe(`Modal Component`, () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Modal />, div);
		ReactDOM.unmountComponentAtNode(div);
	})

	it('renders the UI as expected', () => {
		const wrapper = shallow(<Modal />);
		expect(toJson(wrapper)).toMatchSnapshot();
	})
})