type Input = {
  type: 'input',
  value: number,
  subscribers: Set<Observable>,
};

type Computed = {
  type: 'computed',
  value: number,
  equal: boolean,
  computeFn: () => void,
  subscribers: Set<Observable>,
};

type Callback = {
  type: 'callback',
  callbackFn: () => void,
  subscriptions: Set<Input|Computed>,
};

type Observable = Input | Computed | Callback;

type Getter = () => number;
type Setter = (value: number) => void;


let ctx: Observable|undefined = undefined;

export function createInput(value: number): [Getter, Setter] {
  const input: Input = {
    type: 'input',
    value,
    subscribers: new Set<Observable>(),
  };

  const getter: Getter = () => {
    if (ctx) {
      addSubscriber(input, ctx);
    }

    return input.value;
  };
  
  const setter: Setter = (newValue) => {
    input.value = newValue;
    onInputChanged(input);
  };

  return [getter, setter];
};

export function createComputed(fn: Getter, opts?: unknown, equal: boolean = false): Getter {
  const computed: Computed = {
    type: 'computed',
    value: 0,
    equal,
    subscribers: new Set<Observable>(),
    computeFn: function() {
      this.value = fn();
    },
  };

  // init dependency chain and set initial value.
  const prevCtx = ctx;
  ctx = computed;
  computed.computeFn();
  ctx = prevCtx;

  return () => {
    if (ctx) {
      addSubscriber(computed, ctx);
    }

    return computed.value;
  };
}

export function createCallback(fn: () => void): () => void {
  const callback: Callback = {
    type: 'callback',
    callbackFn: fn,
    subscriptions: new Set<Input|Computed>(),
  };

  // init dependency chain.
  const prevCtx = ctx;
  ctx = callback;
  callback.callbackFn();
  ctx = prevCtx;

  // unsubscribe fn.
  return () => {
    for (const obs of callback.subscriptions) {
      obs.subscribers.delete(callback);
    }
  };
}

function addSubscriber(obs: Input|Computed, sub: Observable) {
  obs.subscribers.add(sub);

  if (sub.type === 'callback') {
    sub.subscriptions.add(obs);
  }
}

function onInputChanged(input: Input) {
  const needsCallback = new Set<Callback>();
  triggerUpdates(input.subscribers, needsCallback);

  for (const callback of needsCallback) {
    callback.callbackFn();
  }
}

function triggerUpdates(toUpdate: Set<Observable>, needsCallback: Set<Callback>) {
  const nextUpdate = new Set<Observable>();

  for (const obs of toUpdate) {
    if (obs.type === 'computed') {
      const prev = obs.value;
      obs.computeFn();
      if (!obs.equal || prev !== obs.value) {
        for (const sub of obs.subscribers) {
          nextUpdate.add(sub);
        }
      }
    }

    if (obs.type === 'callback') {
      needsCallback.add(obs);
    }
  }

  if (nextUpdate.size) {
    triggerUpdates(nextUpdate, needsCallback);
  }
}
