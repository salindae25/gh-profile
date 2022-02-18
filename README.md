# gh-profile

### Create git action

- This action will trigger every time code push to main
- Jobs in the action run based on the commit message
  - if `[qa]` is present in the commit message it will create a `QA` release
  - if `[stage]` is present in the commit message it will create a `UAT` release
