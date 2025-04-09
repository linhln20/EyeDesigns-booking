import { test, expect } from '@playwright/test';
import { LoginPage } from '../tests/pages/LoginPage';

let loginPage: LoginPage;
const URL = 'https://brand-cp.komobook.com/login';

test.beforeEach(async ({ page }) => {
    // Navigate to URL before each test
    await page.goto(URL);
    loginPage = new LoginPage(page);
});

test.describe('Login Test', () => {
    test('Should login successfully', async ({ page }) => {

        await loginPage.login('m@gmail.com', '12345678!');
        await expect(page.locator('//*[@id="root"]/div/main')).toContainText('Welcome to Admin Dashboard');
    });
});
