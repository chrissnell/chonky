import Root from './BreadcrumbRoot.svelte';
import List from './BreadcrumbList.svelte';
import Item from './BreadcrumbItem.svelte';
import Link from './BreadcrumbLink.svelte';
import Separator from './BreadcrumbSeparator.svelte';
import Page from './BreadcrumbPage.svelte';

export type { BreadcrumbRootProps } from './BreadcrumbRoot.svelte';
export type { BreadcrumbListProps } from './BreadcrumbList.svelte';
export type { BreadcrumbItemProps } from './BreadcrumbItem.svelte';
export type { BreadcrumbLinkProps } from './BreadcrumbLink.svelte';
export type { BreadcrumbSeparatorProps } from './BreadcrumbSeparator.svelte';
export type { BreadcrumbPageProps } from './BreadcrumbPage.svelte';

const Breadcrumb = Object.assign(Root, { List, Item, Link, Separator, Page });
export { Breadcrumb };
