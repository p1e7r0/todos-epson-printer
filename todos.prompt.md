When managing printer connection states, implement the following behavior:

Connected State:

- Set the connection button to disabled state
- Display status text as "Connected"
- Collapse the connection accordion panel

Disconnected State:

- Set the connection button to enabled state
- Display status text as "Disconnected"
- Expand the connection accordion panel to show connection options

Technical Requirements:

- Update UI elements immediately when connection state changes
- Ensure state changes are synchronized across all UI components
- Maintain consistent visual feedback during state transitions
- Handle edge cases (e.g. connection timeout, partial connectivity)
- Follow accessibility guidelines for interactive elements
