# chonky-ui

A Svelte 5 component library with an opinionated monospace design system. Wraps [bits-ui](https://bits-ui.com) for accessibility and behavior.

## Install

Configure your project to use the GitHub npm registry for the `@chrissnell` scope:

```bash
echo "@chrissnell:registry=https://npm.pkg.github.com" >> .npmrc
```

Then install:

```bash
npm install @chrissnell/chonky-ui bits-ui @internationalized/date
```

## Setup

Import the stylesheet in your root layout:

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import '@chrissnell/chonky-ui/css';
</script>
```

Optionally import just the design tokens:

```svelte
<script>
  import '@chrissnell/chonky-ui/tokens';
</script>
```

## Usage

```svelte
<script>
  import { Button, Badge, Input, Modal } from '@chrissnell/chonky-ui';

  let modalOpen = $state(false);
</script>

<Button variant="primary" onclick={() => modalOpen = true}>Save</Button>
<Badge variant="success">online</Badge>
<Input placeholder="Search..." />

<Modal bind:open={modalOpen}>
  <Modal.Header>Title</Modal.Header>
  <Modal.Body>Content here.</Modal.Body>
</Modal>
```

## Components

**Core**: Button, Badge, Input, Select, Toggle, Radio, RadioGroup, Box, BoxHeader, Table, Label, Separator, Spinner, Dot, StatusBar, EmptyState, ApplyBanner, ThemeToggle

**Navigation & Layout**: Tabs, Breadcrumb, Pagination, Accordion, Collapsible, Toolbar, ScrollArea, NavigationMenu, Menubar

**Overlays**: Tooltip, Popover, DropdownMenu, ContextMenu, Command, AlertDialog, LinkPreview, Combobox, Listbox, Modal

**Form & Data**: Checkbox, Slider, Progress, Meter, PinInput, ToggleButton, ToggleGroup, RatingGroup, Avatar, AspectRatio

**Date & Time**: Calendar, RangeCalendar, DateField, DatePicker, DateRangeField, DateRangePicker, TimeField, TimeRangeField

**Utilities**: LogViewer, Toast/Toaster

## License

MIT
