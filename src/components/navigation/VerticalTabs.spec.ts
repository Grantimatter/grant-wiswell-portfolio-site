import VerticalTabs from './VerticalTabs.svelte';
import { render, screen, fireEvent } from '@testing-library/svelte';

describe('VerticalTabs Component', () => {
    // Test VerticalTabs render
	test('should render the component', () => {
		render(VerticalTabs);

		const firstTabNode = screen.getByText(/First Tab Heading/i);

		expect(firstTabNode).toBeTruthy();
	});
    
    // Test second tab
	test('should switch to second tab', async () => {
		render(VerticalTabs);

		const secondTabElement = screen.getByText(/Second Tab/i);

		fireEvent.click(secondTabElement);

		await screen.findByText(/Second Tab Heading/i);
	});

    // Test third tab
	test('should switch to third tab', async () => {
        render(VerticalTabs);

        const thirdTabElement = screen.getByText(/Third Tab/i);

        fireEvent.click(thirdTabElement);

        await screen.findByText(/Third Tab Heading/i);
    });
});
