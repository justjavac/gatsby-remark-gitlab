const Remark = require(`remark`);
const plugin = require(`../index`);

const remark = new Remark().data(`settings`, {
  commonmark: true,
  footnotes: true,
  pedantic: true,
})

test(`mention`, () => {
  const markdownAST = remark.parse(`@user`);
  plugin({ markdownAST });
  expect(markdownAST).toMatchSnapshot();
});

test(`issues`, () => {
  const markdownAST = remark.parse(`#12`);
  plugin({ markdownAST });
  expect(markdownAST).toMatchSnapshot();
});

test(`hash`, () => {
  const markdownAST = remark.parse(`a5c3785ed8d6a35868bc169f07e40e889087fd2e`);
  plugin({ markdownAST });
  expect(markdownAST).toMatchSnapshot();
});
