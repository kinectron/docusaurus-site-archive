# kinectron.github.io

## about

this is kinectron's website, it is developed using [docusaurus](https://docusaurus.io/).

the source branch of this repository has the code.
the master branch of this repository is built by docusaurus and published online by github pages on [kinectron.github.io]()

to build from the source branch

```bash
cd website
```

GIT_USER should be an user that has push access to this repository.

this command builds the website and then pushes to the master branch.

```bash
GIT_USER=montoyamoraga npm run publish-gh-pages
```

### notes

on my local repository i did this

```bash
git push -u origin source
```

so that everytime i do push, by default it is pushed from origin to the source branch
