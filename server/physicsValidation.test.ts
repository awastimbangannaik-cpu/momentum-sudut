import test from 'node:test';
import assert from 'node:assert/strict';
import { SERVER_ANSWER_KEYS, DETAILED_SOLUTIONS } from './assessmentData';
import { CLIENT_QUESTIONS } from '../src/data/clientQuestions';
import { computeAssessmentSummary } from '../src/lib/gradingUtils';

test('All 10 questions exist in client bank, answer keys, and detailed solutions', () => {
  assert.equal(CLIENT_QUESTIONS.length, 10);
  assert.equal(SERVER_ANSWER_KEYS.length, 10);
  assert.equal(DETAILED_SOLUTIONS.length, 10);

  for (let i = 0; i < 10; i += 1) {
    assert.equal(CLIENT_QUESTIONS[i].id, i + 1);
    assert.equal(SERVER_ANSWER_KEYS[i].questionId, i + 1);
    assert.equal(DETAILED_SOLUTIONS[i].questionId, i + 1);
  }
});

test('Total maximum score across all 10 questions equals 100', () => {
  const maxSum = SERVER_ANSWER_KEYS.reduce((acc, k) => acc + k.maxScore, 0);
  assert.equal(maxSum, 100);
});

test('Physics consistency verification for Q1 through Q10 from first principles', () => {
  // Q1: Solid cylinder M=8.0 kg, d=0.50 m -> R=0.25 m, v=10 m/s
  const R1 = 0.5 / 2;
  const omega1 = 10 / R1;
  const I1 = 0.5 * 8.0 * R1 ** 2;
  const L1 = I1 * omega1;
  assert.equal(L1, 10);
  assert.equal(SERVER_ANSWER_KEYS[0].correctOption, 'B');

  // Q2: Two discs merge: mA=4, RA=0.5, wA=+18; mB=2, RB=1.0, wB=-6
  const IA = 0.5 * 4 * 0.5 ** 2;
  const IB = 0.5 * 2 * 1.0 ** 2;
  const wFinal2 = (IA * 18 + IB * -6) / (IA + IB);
  assert.equal(wFinal2, 2);
  assert.equal(SERVER_ANSWER_KEYS[1].correctOption, 'B');

  // Q3: Skater I1=4.5, w1=4 -> I2=1.5
  const L3 = 4.5 * 4;
  const w3_2 = L3 / 1.5;
  const Ek3_1 = 0.5 * 4.5 * 4 ** 2;
  const Ek3_2 = 0.5 * 1.5 * w3_2 ** 2;
  assert.equal(L3, 18);
  assert.equal(w3_2, 12);
  assert.equal(Ek3_2 - Ek3_1, 72);

  // Q4: Turntable Ic=8, m=4, r1=2 -> r2=1, w1=3
  const I4_1 = 8 + 4 * 2 ** 2;
  const I4_2 = 8 + 4 * 1 ** 2;
  const L4 = I4_1 * 3;
  const w4_2 = L4 / I4_2;
  assert.equal(I4_1, 24);
  assert.equal(I4_2, 12);
  assert.equal(L4, 72);
  assert.equal(w4_2, 6);

  // Q5: Rod center pivot Mb=3, Lb=2, m=0.5 x2, r1=0.5 -> r2=1.0, w1=5
  const Irod5 = (1 / 12) * 3 * 2 ** 2;
  const I5_1 = Irod5 + 2 * 0.5 * 0.5 ** 2;
  const I5_2 = Irod5 + 2 * 0.5 * 1.0 ** 2;
  const L5 = I5_1 * 5;
  const w5_2 = L5 / I5_2;
  assert.equal(I5_1, 1.25);
  assert.equal(L5, 6.25);
  assert.equal(I5_2, 2.0);
  assert.equal(w5_2, 3.125);

  // Q6: Rolling solid sphere about contact point P: M=5, R=0.2, vCM=4
  const Icm6 = (2 / 5) * 5 * 0.2 ** 2;
  const w6 = 4 / 0.2;
  const Lp6 = 5 * 4 * 0.2 + Icm6 * w6;
  assert.ok(Math.abs(Lp6 - 5.6) < 1e-12);
  assert.equal(SERVER_ANSWER_KEYS[5].correctNumber, 5.6);

  // Q7: Coaxial ring + disc opposite directions
  const L7 = 3 * 0.4 ** 2 * 15 + 0.5 * 4 * 0.5 ** 2 * -20;
  assert.ok(Math.abs(L7 - -2.8) < 1e-12);
  assert.equal(SERVER_ANSWER_KEYS[6].correctNumber, -2.8);

  // Q8: Star collapse R1=2e6 -> R2=1e4, w1=0.05
  const w8 = 0.05 * (2e6 / 1e4) ** 2;
  assert.equal(w8, 2000);
  assert.equal(SERVER_ANSWER_KEYS[7].correctNumber, 2000);

  // Q9: Disc + ring merge, wFinal=+4 -> solve m
  const Idisc9 = 0.5 * 6 * 0.5 ** 2;
  const m9 = (Idisc9 * 10 - Idisc9 * 4) / (0.5 ** 2 * (4 - -5));
  assert.equal(m9, 2);
  assert.equal(SERVER_ANSWER_KEYS[8].correctNumber, 2);

  // Q10: Rod end pivot M=1.2, L=1.5, m=0.5, r1=1.2, w1=4, w2=6 -> solve r2
  const Irod10 = (1 / 3) * 1.2 * 1.5 ** 2;
  const I10_1 = Irod10 + 0.5 * 1.2 ** 2;
  const I10_2 = (I10_1 * 4) / 6;
  const r10_2 = Math.sqrt((I10_2 - Irod10) / 0.5);
  assert.ok(Math.abs(r10_2 - 0.6) < 1e-12);
  assert.equal(SERVER_ANSWER_KEYS[9].correctNumber, 0.6);
});

test('Full perfect submission yields 100/100', () => {
  const perfectAnswers = {
    1: 'B',
    2: 'B',
    3: ['A', 'C', 'E'],
    4: ['A', 'C', 'E'],
    5: [true, false, true, false],
    6: '5.6',
    7: '-2.8',
    8: '2e3',
    9: '2',
    10: '0,6',
  };

  const summary = computeAssessmentSummary(perfectAnswers, SERVER_ANSWER_KEYS);
  assert.equal(summary.totalScore, 100);
  assert.equal(summary.percentage, 100);
  assert.equal(summary.answeredCount, 10);
});
