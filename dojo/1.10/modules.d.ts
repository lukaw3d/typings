/// <reference path="index.d.ts" />

declare module 'dojo/_base/array' {
	const dojoArray: dojo._base.Array;
	export = dojoArray;
}

declare module 'dojo/_base/Color' {
	const Color: dojo._base.ColorConstructor;
	export = Color;
}

declare module 'dojo/_base/config' {
	const config: dojo._base.Config;
	export = config;
}

declare module 'dojo/_base/connect' {
	const connect: dojo._base.Connect;
	export = connect;
}

declare module 'dojo/_base/declare' {
	const dojoDeclare: dojo._base.Declare;
	export = dojoDeclare;
}

declare module 'dojo/_base/Deferred' {
	const Deferred: {
		new <T>(canceller?: (reason: any) => void): dojo._base.Deferred<T>;
		<T>(canceller?: (reason: any) => void): dojo._base.Deferred<T>;

		when<T>(valueOrPromise: any, callback?: dojo.promise.PromiseCallback<T>, errback?: dojo.promise.PromiseErrback, progback?: dojo.promise.PromiseProgback): dojo.Deferred<T>;
	};
	export = Deferred;
}

declare module 'dojo/_base/event' {
	const event: dojo._base.EventModule;
	export = event;
}

declare module 'dojo/_base/fx' {
	const fx: dojo._base.Fx;
	export = fx;
}

declare module 'dojo/_base/html' {
	const dojo: dojo._base.Dojo;
	export = dojo;
}

/* TODO: dojo/_base/json */

declare module 'dojo/_base/kernel' {
	const dojo: dojo._base.Dojo;
	export = dojo;
}

declare module 'dojo/_base/lang' {
	const lang: dojo._base.Lang;
	export = lang;
}

declare module 'dojo/_base/loader' {
	const loader: dojo._base.Loader;
	export = loader;
}

/* TODO: dojo/_base/NodeList */

/* TODO: dojo/_base/query */

declare module 'dojo/_base/sniff' {
	const has: dojo.Has;
	export = has;
}

declare module 'dojo/_base/unload' {
	const unload: dojo._base.Unload;
	export = unload;
}

declare module 'dojo/_base/url' {
	const url: dojo._base.Url;
	export = url;
}

declare module 'dojo/_base/window' {
	const window: dojo._base.Window;
	export = window;
}

declare module 'dojo/_base/xhr' {
	const xhr: dojo._base.Xhr;
	export = xhr;
}

declare module 'dojo/AdapterRegistry' {
	const AdapterRegistry: dojo.AdapterRegistryConstructor;
	export = AdapterRegistry;
}

declare module 'dojo/aspect' {
	const aspect: dojo.Aspect;
	export = aspect;
}

declare module 'dojo/back' {
	const back: dojo.Back;
	export = back;
}

declare module 'dojo/behavior' {
	const behavior: dojo.Behavior;
	export = behavior;
}

declare module 'dojo/cache' {
	const cache: dojo.Cache;
	export = cache;
}

declare module 'dojo/colors' {
	const Color: dojo._base.ColorConstructor;
	export = Color;
}

declare module 'dojo/cookie' {
	const cookie: dojo.Cookie;
	export = cookie;
}

declare module 'dojo/Deferred' {
	const Deferred: {
		new <T>(canceller?: (reason: any) => void): dojo.Deferred<T>;
		<T>(canceller?: (reason: any) => void): dojo.Deferred<T>;
	};
	export = Deferred;
}

declare module 'dojo/dom-form' {
	const domForm: dojo.DomForm;
	export = domForm;
}

declare module 'dojo/has' {
	const has: dojo.Has;
	export = has;
}

declare module 'dojo/io-query' {
	const ioQuery: dojo.IoQuery;
	export = ioQuery;
}

declare module 'dojo/on' {
	const on: dojo.On;
	export = on;
}

declare module 'dojo/request' {
	const request: dojo.request.Request;
	export = request;
}

declare module 'dojo/request/watch' {
	const watch: dojo.request.Watch;
	export = watch;
}

declare module 'dojo/request/xhr' {
	const xhr: dojo.request.Xhr;
	export = xhr;
}

declare module 'dojo/text' {
	const text: dojo.Text;
	export = text;
}

declare module 'dojo/topic' {
	const hub: dojo.Topic;
	export = hub;
}

declare module 'dojo/touch' {
	const touch: dojo.Touch;
	export = touch;
}
