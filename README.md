# Deeplink Explorer

## Overview
A React TypeScript application that helps partners generate and test deeplinks for the Upswing SDK. The app provides a user-friendly interface to select various parameters and generates properly formatted deeplinks that can be used to launch specific sections of the Upswing mobile SDK.

## Purpose
This tool is designed for Upswing partners to:
- Generate deeplinks for different SDK sections (FD flows, help center, investments, etc.)
- Test deeplinks before implementing them in their applications
- Understand the deeplink structure and available parameters
- Quickly access different SDK flows without manual URL construction

## App Structure

### Components (`src/components/`)
- **DeeplinkGenerator.tsx** - Main component that orchestrates the entire flow
- **PartnerCodeSelector.tsx** - Dropdown for selecting partner codes (54+ real partners)
- **DeviceSelector.tsx** - Chip-style selector for iOS/Android (currently for UI only)
- **ProductTypeSelector.tsx** - Chip-style selector for FD/PL/SCC product types
- **FlowTypeSelector.tsx** - Dropdown for SDK flow types (14 different flows)
- **DeeplinkButton.tsx** - Button component for opening/copying generated deeplinks

### Types (`src/types/`)
- **PartnerCode** - Interface for partner name and code
- **DeeplinkConfig** - Configuration object for deeplink generation
- **DeeplinkTemplate** - Template structure for deeplinks (currently unused)

### Utils (`src/utils/`)
- **deeplinkGenerator.ts** - Core logic for generating deeplinks with Firebase host support
- **firebaseConfig.ts** - Partner-specific Firebase host configuration
- **csvParser.ts** - CSV parsing utilities (currently unused)
- **deeplinkConfig.ts** - Configuration mappings (currently unused)

## Data Sources

### Partner Codes
Partner codes are sourced from `partner-definitions.yaml` and hardcoded in `PartnerCodeSelector.tsx`. The YAML file contains 54+ real partner definitions including:
- Financial institutions (Tata Moneyfy, Zerodha, etc.)
- Fintech companies (PhonePe, Paytm Money, Cred, etc.)
- Banks and lending platforms
- Investment platforms

### Flow Types
Flow types are based on the `deeplink-guide.pdf` documentation and include:
- **Bank Selection**: Single/Multiple bank selection with FSI filters
- **My Investments**: View investments with different sections (Booked, Pending, Matured)
- **Transactions**: View all transactions
- **Support**: View tickets, create tickets, help center
- **Special FD Categories**: Senior citizen, safest FDs, high return FDs, tax saver FDs

### Partner Selection
The partner dropdown is now sorted alphabetically for easier navigation through 54+ partner options.

## Deeplink Structure
Based on the official Upswing SDK documentation with Firebase host support:

### Android Deeplink
```
https://upswing.access.partner/${partnerCode}?action=webview&redirect=${route}
```

### iOS Deeplink
```
upswing-access-partner-${partnerCode}://upswing?route=${route}
```

### Firebase Host Deeplink (for configured partners)
```
https://${firebaseHost}?link=${encodeURIComponent(baseDeeplink)}
```

Where:
- `partnerCode` - Partner code from the YAML definitions
- `route` - Specific SDK section route (URL encoded)
- `firebaseHost` - Partner-specific Firebase host (e.g., stablemoney.page.link)

### Firebase Host Configuration
Partners with Firebase hosts configured:
- **Stable Money (STBM)**: `stablemoney.page.link`
- **Edhas (EDHS)**: `edhas.page.link`

### Example Deeplinks

#### Android Deeplinks
- Help Center: `https://upswing.access.partner/ACME?action=webview&redirect=deeplink-manager%2Ffd%2FOPEN_HELP_CENTER`
- Multiple Banks: `https://upswing.access.partner/PHPE?action=webview&redirect=deeplink-manager%2Ffd%2FFSI_FILTER%3FfsiList%3DUTKSIN%7CSMCBIN`

#### iOS Deeplinks
- Help Center: `upswing-access-partner-acme://upswing?route=deeplink-manager%2Ffd%2FOPEN_HELP_CENTER`
- Multiple Banks: `upswing-access-partner-phpe://upswing?route=deeplink-manager%2Ffd%2FFSI_FILTER%3FfsiList%3DUTKSIN%7CSMCBIN`

#### Firebase Host Deeplinks
- Stable Money Help Center: `https://stablemoney.page.link?link=https%3A%2F%2Fupswing.access.partner%2FSTBM%3Faction%3Dwebview%26redirect%3Ddeeplink-manager%252Ffd%252FOPEN_HELP_CENTER`
- Edhas My Investments: `https://edhas.page.link?link=https%3A%2F%2Fupswing.access.partner%2FEDHS%3Faction%3Dwebview%26redirect%3Ddeeplink-manager%252Ffd%252FVIEW_INVESTMENTS`

## Key Features

### User Interface
- Clean, responsive design with proper spacing and typography
- Chip-style selectors for Device and Product Type (better UX than dropdowns)
- Dropdown selectors for Partner Code and Flow Type (better for many options)
- Real-time deeplink preview
- Copy to clipboard functionality with subtle feedback (no popup alerts)
- "Open Deeplink" button for testing

### Technical Features
- TypeScript for type safety
- Proper URL encoding for special characters (especially `|` symbols)
- Maintainable code structure with separation of concerns
- CSS styling with hover effects and active states

## Development Notes

### Current State
- All core functionality is implemented and working
- Partner codes are hardcoded from YAML file (54+ partners) and sorted alphabetically
- Flow types are hardcoded from PDF guide (14 flows)
- Device selection now affects deeplink generation (iOS uses custom scheme, Android uses HTTPS)
- Product type selection is available but not currently used in deeplink generation
- Copy to clipboard shows inline feedback instead of popup alerts

### Potential Improvements
- Move partner codes to external configuration file
- Add more flow types as SDK evolves
- Implement product type logic if needed
- Add validation for deeplink parameters
- Add deeplink testing/preview functionality

## File Dependencies
- `partner-definitions.yaml` - Source of truth for partner codes
- `deeplink-guide.pdf` - Documentation for deeplink structure and flow types

## Running the App
```bash
npm start
```
Runs on `http://localhost:3000`

## Deployment
The app is deployed to GitHub Pages and can be accessed at:
```
https://gazal24.github.io/deeplink-explorer/
```

To deploy updates:
```bash
npm run deploy
```

## Architecture Decisions
1. **Hardcoded Data**: Partner codes and flow types are hardcoded for simplicity and reliability
2. **Component Separation**: Each parameter has its own component for maintainability
3. **Type Safety**: TypeScript interfaces ensure proper data flow
4. **URL Encoding**: Proper encoding handles special characters in routes
5. **Responsive Design**: Works well on different screen sizes

---

## Create React App Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder
