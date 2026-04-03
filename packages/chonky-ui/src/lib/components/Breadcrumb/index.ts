import Root from './BreadcrumbRoot.svelte';
import List from './BreadcrumbList.svelte';
import Item from './BreadcrumbItem.svelte';
import Link from './BreadcrumbLink.svelte';
import Separator from './BreadcrumbSeparator.svelte';
import Page from './BreadcrumbPage.svelte';

const Breadcrumb = Object.assign(Root, { List, Item, Link, Separator, Page });
export { Breadcrumb };
