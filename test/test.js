const assert = require('assert');
const fs = require('fs');
const chai = require('chai');
const expect = chai.expect;

describe('Compare generated file', () => {
    it('should match the snapshot', () => {
        let generatedFile = fs.readFileSync('src/test-svgs/TestSvg.js');
        let snapshotFile = fs.readFileSync('src/test-svgs/snapshots/TestSvg.js');
        expect(generatedFile).to.deep.equal(snapshotFile);
    });
});
