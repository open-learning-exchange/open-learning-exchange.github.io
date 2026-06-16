# MDwiki Markdown Examples

Drop this file in the repo, push to your branch, then open it through the
raw.githack preview (the same `https://raw.githack.com/.../mdwiki.html#!...`
style link the VI docs already use). Compare each section's rendered output to
the "Expected" note. Anything that shows the raw markdown characters instead of
formatted output is unsupported.

---

## 1. Baseline (should all work — GFM core)

**Bold**, *italic*, ~~strikethrough~~, `inline code`, and a
[link](https://github.com).

Auto-link (GFM): https://github.com

> Blockquote line.

| Col A | Col B |
| ----- | ----- |
| 1     | 2     |

*Expected: all render normally. If the table or strikethrough fails, the marked
build is older/more limited than assumed.*

---

## 2. Fenced code block — PLAIN

```
function test() {
  console.log("no language tag");
}
```

*Expected: renders as a monospace code box. MDwiki's own quickstart shows this
working, so a failure here would be surprising.*

---

## 3. Fenced code block — WITH LANGUAGE (syntax highlighting)

```javascript
const hello = () => {
  alert("Hello world!");
};
```

*Expected: code box with highlight.js coloring. If it renders as a plain box
with no colors, the issue is "no highlighting," NOT "not compatible" — an
important wording distinction for the PR.*

---

## 4. Fenced code block — language that may collide with a GIMMICK

```gist
this should be a code sample, not a gimmick
```

*Expected: this is the real fenced-code risk in MDwiki. If a tag like `gist`,
`math`, or `youtube` gets swallowed/interpreted instead of shown as code, that's
the actual incompatibility — and it's specific to gimmick-named tags, not all
fenced blocks.*

---

## 5. Footnote

Here is a sentence with a footnote.[^1]

[^1]: This is the footnote text.

*Expected: marked has no footnote support, so this should render the raw
`[^1]` marker and dump the definition as plain text. Confirms the PR's footnote
line.*

---

## 6. Task list

- [ ] Unchecked task
- [x] Checked task
- [ ] Another task

*Expected: older marked renders these as literal `[ ]` / `[x]` text with no
checkboxes. Confirms the PR's task-list line.*

---

## 7. Definition list (extra candidate — not in the PR list)

Term
: Definition of the term

*Expected: not supported by marked; renders as plain text. If you want the
"list can grow" note in the PR to be useful, this is a likely next addition.*

---

## 8. Emoji shortcode (extra candidate)

Status: :white_check_mark: done :cat:

*Expected: no emoji gimmick by default, so `:white_check_mark:` shows as literal
text. (The VI docs already tell interns to paste real emoji, which lines up with
this being unsupported.)*

---

## 9. Heading anchors / in-page links (sanity check)

[Jump to section 1](#1-baseline-should-all-work--gfm-core)

*Expected: MDwiki generates its own heading anchors, so this may or may not match
GitHub's anchor slugs. Useful to confirm if interns rely on intra-page links.*