The purpose of this challenge is to demonstrate how you:

  - write and structure a simple web application,
  - present simple data for interpretation by a human.
### Scenario

A hospital is running a trial to see if their patients age 20-40 are falling
below the recommended level of activity:

- 150 minutes of moderate intensity activity, or
- 75 minutes of vigorous intensity activity, or
- a proportionate mix of both, e.g. 25 minutes of vigorous and 100 minutes of
moderate.

### Data

Included in `/mock-api-data` are fixtures from an API that provides activity
data for participants in the trial. A single day's data is provided.

- `/definitions/activities` - defines activities and their intensity.
- `/patients` - defines all patients on the trial.
- `/patients/:id/summary` - summarises activity for a particular patient.

Dates are supplied in UTC in ISO 8601 format (`YYYY-MM-DD`).

# FrontendChallengeHospital

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Instructions

Frameworks and Tools:
- AngularJS
- Boostrap
- npm

Open terminal:
<pre>
 git clone https://github.com/ghismo280/frontend-challenge-hospital.git<br>
 cd frontend-challenge-hospital <br>
 npm install <br>
 ng serve <br>
 </pre>

 Open http://localhost:4200 in your web browser.