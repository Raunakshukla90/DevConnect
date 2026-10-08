# Accessible Plan Comparison

This project is a responsive and accessible pricing comparison page for
three plans: Basic, Pro, and Premium.

## Features

- Compares three plans across 15 features.
- Includes a "Show differences only" control.
- The differences control is keyboard accessible.
- Visible focus indicators are provided for interactive elements.
- Uses semantic HTML table elements.
- Responsive layout for desktop, tablet, and mobile screens.
- No horizontal scrolling at 320px width.
- Includes accessible table headers and row relationships.

## Responsive Design

On larger screens, the plans are displayed in a traditional table.
This makes it easy to compare the three plans side by side.

A traditional wide table does not work well on a narrow 320px screen.
Therefore, on smaller screens the table changes into a stacked card-style
layout.

Each feature becomes its own section, with the Basic, Pro, and Premium
values displayed underneath it. This avoids horizontal scrolling while
keeping the comparison understandable.

The content remains a semantic HTML table using `table`, `thead`,
`tbody`, `th`, and `td` elements so that assistive technology can
understand the relationships between features and plan values.

## Show Differences Only

The "Show differences only" checkbox hides rows where all three plans
have the same value.

For example, if all three plans provide email support, that row is hidden
when differences-only mode is enabled.

Rows containing different values remain visible.

A live status message informs users how many features are currently
visible.

## Accessibility

The page is designed to be usable with a keyboard and assistive
technology.

- The comparison control is a native checkbox.
- The control can be reached using the Tab key.
- The checkbox can be activated using the Space key.
- Focus indicators are clearly visible.
- The table uses semantic HTML.
- Column headers use `scope="col"`.
- Feature names use `scope="row"`.
- The page follows a logical visual and keyboard order.
- The layout does not require horizontal scrolling at 320px.

## Testing

The page was tested at desktop and mobile widths, including 320px.

Keyboard testing was performed using:

1. Tab to move between interactive elements.
2. Space to toggle "Show differences only".
3. Visible focus indicators were checked.
4. The mobile layout was checked at 320px to ensure there is no
   horizontal scrolling.

## Technologies

- HTML
- CSS
- JavaScript