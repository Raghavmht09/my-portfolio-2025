# Quality Review Invocation Guide

## How to Trigger Quality Review

### For Main Agent Use

When you've completed implementation work and need quality validation, use the Task tool with the following configuration:

```typescript
// Task tool configuration for Quality Review
{
  "description": "Quality review validation",
  "subagent_type": "general-purpose",
  "prompt": `You are now acting as the Quality Reviewer Agent. Please follow the detailed system prompt located at /Users/raghavmehta/Documents/port-web-app/.claude/quality-reviewer-prompt.md

## Review Context
**Change Request:** [Brief description of what was implemented]
**Original Plan:** [Summary of approved change plan]
**Files Modified:** [List of modified files]
**Implementation Summary:** [What was actually built]

## Your Task
1. Read and follow the Quality Reviewer system prompt exactly
2. Conduct a thorough review of the implemented changes
3. Generate a comprehensive quality report using the provided template
4. Provide clear recommendations and scoring

## Focus Areas for This Review
- [Specific area 1 to focus on]
- [Specific area 2 to focus on]
- [Specific area 3 to focus on]

## Success Criteria
- All requirements from original plan validated
- Code quality meets project standards
- Design system adherence verified
- Accessibility and performance assessed
- User experience evaluated

Please begin by reading the quality reviewer prompt file and then conducting your comprehensive review.`
}
```

### Step-by-Step Process

#### Step 1: Prepare Review Context
Before invoking the reviewer, gather:
- Original change plan or requirements
- List of all modified files
- Brief summary of what was implemented
- Any specific concerns or focus areas

#### Step 2: Invoke Quality Reviewer
Use the Task tool with the configuration above, customizing:
- The change request description
- The list of modified files
- Specific focus areas for this review

#### Step 3: Present Results
After the quality reviewer completes their assessment:
- Share the full review report with the human
- Highlight critical and high-priority issues
- Present the overall recommendation (APPROVE/REQUEST_CHANGES/REJECT)
- Await human decision on next steps

### Example Invocation

```markdown
## Quality Review Request

**Change Request:** Enhanced typography system with Material 3 button improvements
**Modified Files:**
- styles/globals.css
- components/ui/button.tsx
- components/blocks/hero.tsx
- components/blocks/about.tsx
- components/blocks/skills.tsx
- components/blocks/experience.tsx
- components/blocks/achievements.tsx
- components/blocks/contact.tsx

**Implementation Summary:**
- Added comprehensive typography utility classes
- Updated all section headings to use Playfair Display accents
- Enhanced button component with Material 3 elevated/outlined variants
- Improved animation timing to 200-250ms Material specifications
- Added proper touch targets (44px minimum)

**Focus Areas:**
- Typography hierarchy implementation
- Material 3 button compliance
- Animation timing verification
- Accessibility of new components
```

### Quality Gates

The reviewer will assess against these quality gates:

#### Must Pass (Critical)
- ✅ Requirements compliance ≥ 8/10
- ✅ Accessibility score ≥ 8/10
- ✅ No security vulnerabilities
- ✅ No breaking changes without approval

#### Should Pass (High Priority)
- ✅ Code quality ≥ 7/10
- ✅ Design system adherence ≥ 7/10
- ✅ Performance impact acceptable
- ✅ User experience maintained

#### Nice to Have (Medium Priority)
- ✅ Overall score ≥ 9/10
- ✅ Exceeds original requirements
- ✅ Suggests improvements for future

### Response Handling

Based on the reviewer's recommendation:

#### APPROVE ✅
- Implementation meets all standards
- Can proceed with confidence
- Document any minor suggestions for future

#### REQUEST_CHANGES ⚠️
- Address critical and high-priority issues
- Implement recommended fixes
- Re-run quality review after changes

#### REJECT ❌
- Major issues found requiring significant rework
- Review and revise implementation approach
- May need to revisit original plan

### Integration with Change Management

This quality review integrates with the change management process:

1. **Planning Phase** → Plan created and approved
2. **Implementation Phase** → Changes implemented with TodoWrite tracking
3. **Quality Review Phase** → This reviewer validates the work ← **YOU ARE HERE**
4. **Human Decision Phase** → Human reviews report and decides next steps
5. **Completion Phase** → Work approved and documented

### Best Practices

#### For Effective Reviews
- Be specific about what changed and why
- Include context about design decisions made
- Highlight any deviations from original plan
- Note any challenges encountered during implementation

#### For Actionable Results
- Ask reviewer to prioritize recommendations
- Request specific examples of issues found
- Get clear guidance on how to fix problems
- Understand impact of not addressing issues

### Troubleshooting

#### If Review Fails
- Check that all modified files are accessible
- Ensure quality reviewer prompt file exists
- Verify Task tool has proper permissions
- Provide more context if assessment incomplete

#### If Results Unclear
- Ask for clarification on specific issues
- Request examples of good vs. bad implementations
- Get guidance on priority of recommendations
- Understand criteria for passing scores

---

**Remember:** The quality reviewer is your ally in maintaining high standards. Use it proactively to catch issues before human review and ensure consistent quality across all implementations.