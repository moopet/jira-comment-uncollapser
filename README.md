# jira-comment-uncollapser
Chrome extension to reveal Jira comments.

## The problem

If you use Jira, you probably know that you can order ticket comments either wrongly (reverse-chronological, like Twitter) or rightly (the way humans read English).

The default setting is "wrongly"

If you fix it, then you're left with a different problem. You see, you, as a user, want to be able to read the comments in the correct order, but you're also most likely to be interested in the latest one. Only Atlassian have decided you shouldn't be allowed to read it until a period of several time-units has passed, in which you've scrolled down and clicked "View x newer comments" a gazillion times.

## The elegant solution

So a made an exceptionally dumb Chrom(e|ium) extension to fix it, which periodically mashes the button on your behalf.

## The Dumbness

Why don't I use a `MutationObserver` you ask? Well, it's because in longer than the two minutes it took to type that out, I couldn't find anything useful to _observe_, since Jira's HTML is complete div soup.

If you are lazy, like me, you can grab this.

## Installation

Go to extensions -> developer mode -> load unpacked (because that's as far as I bothered)
