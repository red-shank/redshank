import { ORGANIZATION_NAME, REPO_NAME as REPO_NAME_CONFIG } from '@/config';

export const GITHUB_URL = 'https://github.com';

export const GITHUB_API_URL = 'https://api.github.com';

export const RAW_GITHUB_URL = 'https://raw.githubusercontent.com';

export const REPO_NAME = `${ORGANIZATION_NAME}/${REPO_NAME_CONFIG}`;

export const ISSUE_REPORT_URL = `${GITHUB_URL}/${REPO_NAME}/issues/new?assignees=&labels=bug&template=bug_report.yml&title=%5BBUG%5D+-+`;
