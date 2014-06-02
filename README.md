# Frozen

Provides methods for stubbing time.

```
npm install frozen
```

## API

#### .freeze([date]) → undefined

Freezes the current time to that of the `date`, or `Date.now` if no arguments are provided.

#### .melt() → undefined

Returns `Date` to the normal, native `Date`.

## License

[MIT](https://github.com/benjreinhart/frozen/blob/master/LICENSE.txt)
