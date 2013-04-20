MOCHA_OPTS= --check-leaks
REPORTER = dot

check: test

test: test-unit test-acceptance

test-unit:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		$(MOCHA_OPTS)

.PHONY: test test-unit test-acceptance benchmark clean
