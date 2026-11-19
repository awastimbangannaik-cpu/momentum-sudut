import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseNumericInput,
  scoreMultipleChoice,
  scoreComplexMC,
  scoreTrueFalse,
  scoreNumericWithTolerance,
  computeAssessmentSummary,
  type ServerAnswerKey,
} from './gradingUtils';

test('parseNumericInput handles integers, decimals, negatives, and scientific notation', () => {
  assert.equal(parseNumericInput('25').value, 25);
  assert.equal(parseNumericInput('2.5').value, 2.5);
  assert.equal(parseNumericInput('2,5').value, 2.5);
  assert.equal(parseNumericInput('-2.8').value, -2.8);
  assert.equal(parseNumericInput('3.2e4').value, 32000);
  assert.equal(parseNumericInput('2e3').value, 2000);

  assert.equal(parseNumericInput('').isEmpty, true);
  assert.equal(parseNumericInput('5.6 kg').valid, false);
  assert.equal(parseNumericInput('2.5 ').valid, false);
  assert.equal(parseNumericInput('1.2.3').valid, false);
});

test('scoreMultipleChoice gives 10 for exact match and 0 otherwise', () => {
  assert.equal(scoreMultipleChoice('B', 'B'), 10);
  assert.equal(scoreMultipleChoice('A', 'B'), 0);
  assert.equal(scoreMultipleChoice(undefined, 'B'), 0);
});

test('scoreComplexMC enforces strict all-or-nothing scoring', () => {
  assert.equal(scoreComplexMC(['A', 'C', 'E'], ['A', 'C', 'E']), 10);
  assert.equal(scoreComplexMC(['E', 'A', 'C'], ['A', 'C', 'E']), 10);
  // Missing one correct option -> 0
  assert.equal(scoreComplexMC(['A', 'C'], ['A', 'C', 'E']), 0);
  // Extra wrong option -> 0
  assert.equal(scoreComplexMC(['A', 'B', 'C', 'E'], ['A', 'C', 'E']), 0);
  // Empty -> 0
  assert.equal(scoreComplexMC([], ['A', 'C', 'E']), 0);
});

test('scoreTrueFalse applies +2.5 correct, -1 wrong, 0 unanswered, min -4, max 10', () => {
  const key = [true, false, true, false];
  assert.equal(scoreTrueFalse([true, false, true, false], key), 10);
  assert.equal(scoreTrueFalse([false, true, false, true], key), -4);
  assert.equal(scoreTrueFalse([true, true, true, false], key), 2.5 - 1 + 2.5 + 2.5); // 6.5
  assert.equal(scoreTrueFalse([true, null, null, null], key), 2.5);
  assert.equal(scoreTrueFalse(undefined, key), 0);
});

test('scoreNumericWithTolerance accepts values within rounding tolerance', () => {
  assert.equal(scoreNumericWithTolerance('5.6', 5.6, 0.05), 10);
  assert.equal(scoreNumericWithTolerance('5,62', 5.6, 0.05), 10);
  assert.equal(scoreNumericWithTolerance('5.7', 5.6, 0.05), 0);
  assert.equal(scoreNumericWithTolerance('2e3', 2000, 5), 10);
  assert.equal(scoreNumericWithTolerance('-2.8', -2.8, 0.05), 10);
  assert.equal(scoreNumericWithTolerance('2.8', -2.8, 0.05), 0);
});

test('computeAssessmentSummary aggregates full 100-point test accurately', () => {
  const keys: ServerAnswerKey[] = [
    { questionId: 1, type: 'single_choice', maxScore: 10, correctOption: 'B', correctAnswerDisplay: 'B' },
    { questionId: 2, type: 'complex_choice', maxScore: 10, correctOptions: ['A', 'C'], correctAnswerDisplay: 'A, C' },
    { questionId: 3, type: 'true_false', maxScore: 10, correctBooleans: [true, false, true, false], correctAnswerDisplay: 'B-S-B-S' },
    { questionId: 4, type: 'short_numeric', maxScore: 10, correctNumber: -2.8, tolerance: 0.05, correctAnswerDisplay: '-2.8' },
  ];

  const summary = computeAssessmentSummary(
    {
      1: 'B',
      2: ['A', 'C'],
      3: [true, true, null, false], // +2.5 -1 +0 +2.5 = 4
      4: '-2,8',
    },
    keys
  );

  assert.equal(summary.totalScore, 34);
  assert.equal(summary.maxTotalScore, 40);
  assert.equal(summary.answeredCount, 4);
  assert.equal(summary.unansweredCount, 0);
  assert.equal(summary.percentage, 85);
});
