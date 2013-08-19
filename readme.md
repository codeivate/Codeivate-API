## Codeivate API
---
This is a little "Battle Game" made with the CodeIvate API.

You need to download "composer `(locally)`"

```
$ curl -sS https://getcomposer.org/installer | php
```

Or if you don't have curl `(locally)`:

```
php -r "eval('?>'.file_get_contents('https://getcomposer.org/installer'));"
```

If you want to install it globally run this:

```
$ curl -sS https://getcomposer.org/installer | php
$ mv composer.phar /usr/local/bin/composer
```

Next you need to download this repo into your `sites` or `htdocs` folder or wherever your localhost is pointed to.

Open a terminal cd into that directory and do this:

```
$ git clone https://github.com/RobinMalfait/CodeIvate-API.git "CodeIvateAPIBattle"
```

Once that is done, `$ cd` into that `CodeIvateAPIBattle` and run `$ composer install`

That's it :)
