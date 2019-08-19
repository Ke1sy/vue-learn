#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist


# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Ke1sy/vue-learn.git master:gh-pages

cd -