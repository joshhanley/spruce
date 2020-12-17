import { isNullOrUndefined, isObject, isArray } from './utils'

export const createObservable = (target, callbacks) => {
    Object.entries(target).forEach(([key, value]) => {
        if (! isNullOrUndefined(value) && (isObject(value) || isArray(value))) {
            value['__key_name'] = key
            target[key] = createObservable(value, callbacks)
        }
    })

    return new Proxy(target, {
        set(target, key, value) {
            if (! isNullOrUndefined(value) && isObject(value)) {
                value = createObservable(value, callbacks)
            }

            callbacks.set(target, key, target[key] = value)

            return true
        }
    })
}