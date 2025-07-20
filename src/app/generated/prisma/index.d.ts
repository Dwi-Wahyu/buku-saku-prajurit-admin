
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Garjas
 * 
 */
export type Garjas = $Result.DefaultSelection<Prisma.$GarjasPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Kesatuan
 * 
 */
export type Kesatuan = $Result.DefaultSelection<Prisma.$KesatuanPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Berita
 * 
 */
export type Berita = $Result.DefaultSelection<Prisma.$BeritaPayload>
/**
 * Model MediaBerita
 * 
 */
export type MediaBerita = $Result.DefaultSelection<Prisma.$MediaBeritaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  superadmin: 'superadmin',
  admin: 'admin',
  penilai: 'penilai',
  prajurit: 'prajurit'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Garjas
 * const garjas = await prisma.garjas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Garjas
   * const garjas = await prisma.garjas.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.garjas`: Exposes CRUD operations for the **Garjas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Garjas
    * const garjas = await prisma.garjas.findMany()
    * ```
    */
  get garjas(): Prisma.GarjasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kesatuan`: Exposes CRUD operations for the **Kesatuan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kesatuans
    * const kesatuans = await prisma.kesatuan.findMany()
    * ```
    */
  get kesatuan(): Prisma.KesatuanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.berita`: Exposes CRUD operations for the **Berita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beritas
    * const beritas = await prisma.berita.findMany()
    * ```
    */
  get berita(): Prisma.BeritaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaBerita`: Exposes CRUD operations for the **MediaBerita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaBeritas
    * const mediaBeritas = await prisma.mediaBerita.findMany()
    * ```
    */
  get mediaBerita(): Prisma.MediaBeritaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Garjas: 'Garjas',
    User: 'User',
    Kesatuan: 'Kesatuan',
    Profile: 'Profile',
    RefreshToken: 'RefreshToken',
    Berita: 'Berita',
    MediaBerita: 'MediaBerita'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "garjas" | "user" | "kesatuan" | "profile" | "refreshToken" | "berita" | "mediaBerita"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Garjas: {
        payload: Prisma.$GarjasPayload<ExtArgs>
        fields: Prisma.GarjasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GarjasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarjasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GarjasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarjasPayload>
          }
          findFirst: {
            args: Prisma.GarjasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarjasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GarjasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarjasPayload>
          }
          findMany: {
            args: Prisma.GarjasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarjasPayload>[]
          }
          create: {
            args: Prisma.GarjasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarjasPayload>
          }
          createMany: {
            args: Prisma.GarjasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GarjasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarjasPayload>
          }
          update: {
            args: Prisma.GarjasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarjasPayload>
          }
          deleteMany: {
            args: Prisma.GarjasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GarjasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GarjasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GarjasPayload>
          }
          aggregate: {
            args: Prisma.GarjasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGarjas>
          }
          groupBy: {
            args: Prisma.GarjasGroupByArgs<ExtArgs>
            result: $Utils.Optional<GarjasGroupByOutputType>[]
          }
          count: {
            args: Prisma.GarjasCountArgs<ExtArgs>
            result: $Utils.Optional<GarjasCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Kesatuan: {
        payload: Prisma.$KesatuanPayload<ExtArgs>
        fields: Prisma.KesatuanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KesatuanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KesatuanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KesatuanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KesatuanPayload>
          }
          findFirst: {
            args: Prisma.KesatuanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KesatuanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KesatuanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KesatuanPayload>
          }
          findMany: {
            args: Prisma.KesatuanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KesatuanPayload>[]
          }
          create: {
            args: Prisma.KesatuanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KesatuanPayload>
          }
          createMany: {
            args: Prisma.KesatuanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KesatuanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KesatuanPayload>
          }
          update: {
            args: Prisma.KesatuanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KesatuanPayload>
          }
          deleteMany: {
            args: Prisma.KesatuanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KesatuanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KesatuanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KesatuanPayload>
          }
          aggregate: {
            args: Prisma.KesatuanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKesatuan>
          }
          groupBy: {
            args: Prisma.KesatuanGroupByArgs<ExtArgs>
            result: $Utils.Optional<KesatuanGroupByOutputType>[]
          }
          count: {
            args: Prisma.KesatuanCountArgs<ExtArgs>
            result: $Utils.Optional<KesatuanCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Berita: {
        payload: Prisma.$BeritaPayload<ExtArgs>
        fields: Prisma.BeritaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BeritaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BeritaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          findFirst: {
            args: Prisma.BeritaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BeritaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          findMany: {
            args: Prisma.BeritaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>[]
          }
          create: {
            args: Prisma.BeritaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          createMany: {
            args: Prisma.BeritaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BeritaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          update: {
            args: Prisma.BeritaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          deleteMany: {
            args: Prisma.BeritaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BeritaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BeritaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          aggregate: {
            args: Prisma.BeritaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBerita>
          }
          groupBy: {
            args: Prisma.BeritaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeritaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BeritaCountArgs<ExtArgs>
            result: $Utils.Optional<BeritaCountAggregateOutputType> | number
          }
        }
      }
      MediaBerita: {
        payload: Prisma.$MediaBeritaPayload<ExtArgs>
        fields: Prisma.MediaBeritaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaBeritaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaBeritaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaBeritaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaBeritaPayload>
          }
          findFirst: {
            args: Prisma.MediaBeritaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaBeritaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaBeritaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaBeritaPayload>
          }
          findMany: {
            args: Prisma.MediaBeritaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaBeritaPayload>[]
          }
          create: {
            args: Prisma.MediaBeritaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaBeritaPayload>
          }
          createMany: {
            args: Prisma.MediaBeritaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MediaBeritaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaBeritaPayload>
          }
          update: {
            args: Prisma.MediaBeritaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaBeritaPayload>
          }
          deleteMany: {
            args: Prisma.MediaBeritaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaBeritaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaBeritaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaBeritaPayload>
          }
          aggregate: {
            args: Prisma.MediaBeritaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaBerita>
          }
          groupBy: {
            args: Prisma.MediaBeritaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaBeritaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaBeritaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaBeritaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    garjas?: GarjasOmit
    user?: UserOmit
    kesatuan?: KesatuanOmit
    profile?: ProfileOmit
    refreshToken?: RefreshTokenOmit
    berita?: BeritaOmit
    mediaBerita?: MediaBeritaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    penilaianGarjasDibuat: number
    penilaianGarjasDidapatkan: number
    RefreshToken: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penilaianGarjasDibuat?: boolean | UserCountOutputTypeCountPenilaianGarjasDibuatArgs
    penilaianGarjasDidapatkan?: boolean | UserCountOutputTypeCountPenilaianGarjasDidapatkanArgs
    RefreshToken?: boolean | UserCountOutputTypeCountRefreshTokenArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPenilaianGarjasDibuatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GarjasWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPenilaianGarjasDidapatkanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GarjasWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type KesatuanCountOutputType
   */

  export type KesatuanCountOutputType = {
    users: number
  }

  export type KesatuanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | KesatuanCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * KesatuanCountOutputType without action
   */
  export type KesatuanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KesatuanCountOutputType
     */
    select?: KesatuanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KesatuanCountOutputType without action
   */
  export type KesatuanCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Garjas
   */

  export type AggregateGarjas = {
    _count: GarjasCountAggregateOutputType | null
    _avg: GarjasAvgAggregateOutputType | null
    _sum: GarjasSumAggregateOutputType | null
    _min: GarjasMinAggregateOutputType | null
    _max: GarjasMaxAggregateOutputType | null
  }

  export type GarjasAvgAggregateOutputType = {
    id: number | null
    lari: number | null
    garjasA: number | null
    pullup: number | null
    shuttleRun: number | null
    renang: number | null
    situp: number | null
    pushup: number | null
    skorB1: number | null
    skorB2: number | null
    skorB3: number | null
    skorB4: number | null
    garjasB: number | null
    nilaiAkhir: number | null
  }

  export type GarjasSumAggregateOutputType = {
    id: number | null
    lari: number | null
    garjasA: number | null
    pullup: number | null
    shuttleRun: number | null
    renang: number | null
    situp: number | null
    pushup: number | null
    skorB1: number | null
    skorB2: number | null
    skorB3: number | null
    skorB4: number | null
    garjasB: number | null
    nilaiAkhir: number | null
  }

  export type GarjasMinAggregateOutputType = {
    id: number | null
    tanggal: Date | null
    lari: number | null
    garjasA: number | null
    pullup: number | null
    shuttleRun: number | null
    renang: number | null
    situp: number | null
    pushup: number | null
    pangkat: string | null
    skorB1: number | null
    skorB2: number | null
    skorB3: number | null
    skorB4: number | null
    garjasB: number | null
    nilaiAkhir: number | null
    penilaiId: string | null
    prajuritId: string | null
  }

  export type GarjasMaxAggregateOutputType = {
    id: number | null
    tanggal: Date | null
    lari: number | null
    garjasA: number | null
    pullup: number | null
    shuttleRun: number | null
    renang: number | null
    situp: number | null
    pushup: number | null
    pangkat: string | null
    skorB1: number | null
    skorB2: number | null
    skorB3: number | null
    skorB4: number | null
    garjasB: number | null
    nilaiAkhir: number | null
    penilaiId: string | null
    prajuritId: string | null
  }

  export type GarjasCountAggregateOutputType = {
    id: number
    tanggal: number
    lari: number
    garjasA: number
    pullup: number
    shuttleRun: number
    renang: number
    situp: number
    pushup: number
    pangkat: number
    skorB1: number
    skorB2: number
    skorB3: number
    skorB4: number
    garjasB: number
    nilaiAkhir: number
    penilaiId: number
    prajuritId: number
    _all: number
  }


  export type GarjasAvgAggregateInputType = {
    id?: true
    lari?: true
    garjasA?: true
    pullup?: true
    shuttleRun?: true
    renang?: true
    situp?: true
    pushup?: true
    skorB1?: true
    skorB2?: true
    skorB3?: true
    skorB4?: true
    garjasB?: true
    nilaiAkhir?: true
  }

  export type GarjasSumAggregateInputType = {
    id?: true
    lari?: true
    garjasA?: true
    pullup?: true
    shuttleRun?: true
    renang?: true
    situp?: true
    pushup?: true
    skorB1?: true
    skorB2?: true
    skorB3?: true
    skorB4?: true
    garjasB?: true
    nilaiAkhir?: true
  }

  export type GarjasMinAggregateInputType = {
    id?: true
    tanggal?: true
    lari?: true
    garjasA?: true
    pullup?: true
    shuttleRun?: true
    renang?: true
    situp?: true
    pushup?: true
    pangkat?: true
    skorB1?: true
    skorB2?: true
    skorB3?: true
    skorB4?: true
    garjasB?: true
    nilaiAkhir?: true
    penilaiId?: true
    prajuritId?: true
  }

  export type GarjasMaxAggregateInputType = {
    id?: true
    tanggal?: true
    lari?: true
    garjasA?: true
    pullup?: true
    shuttleRun?: true
    renang?: true
    situp?: true
    pushup?: true
    pangkat?: true
    skorB1?: true
    skorB2?: true
    skorB3?: true
    skorB4?: true
    garjasB?: true
    nilaiAkhir?: true
    penilaiId?: true
    prajuritId?: true
  }

  export type GarjasCountAggregateInputType = {
    id?: true
    tanggal?: true
    lari?: true
    garjasA?: true
    pullup?: true
    shuttleRun?: true
    renang?: true
    situp?: true
    pushup?: true
    pangkat?: true
    skorB1?: true
    skorB2?: true
    skorB3?: true
    skorB4?: true
    garjasB?: true
    nilaiAkhir?: true
    penilaiId?: true
    prajuritId?: true
    _all?: true
  }

  export type GarjasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Garjas to aggregate.
     */
    where?: GarjasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Garjas to fetch.
     */
    orderBy?: GarjasOrderByWithRelationInput | GarjasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GarjasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Garjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Garjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Garjas
    **/
    _count?: true | GarjasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GarjasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GarjasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GarjasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GarjasMaxAggregateInputType
  }

  export type GetGarjasAggregateType<T extends GarjasAggregateArgs> = {
        [P in keyof T & keyof AggregateGarjas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGarjas[P]>
      : GetScalarType<T[P], AggregateGarjas[P]>
  }




  export type GarjasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GarjasWhereInput
    orderBy?: GarjasOrderByWithAggregationInput | GarjasOrderByWithAggregationInput[]
    by: GarjasScalarFieldEnum[] | GarjasScalarFieldEnum
    having?: GarjasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GarjasCountAggregateInputType | true
    _avg?: GarjasAvgAggregateInputType
    _sum?: GarjasSumAggregateInputType
    _min?: GarjasMinAggregateInputType
    _max?: GarjasMaxAggregateInputType
  }

  export type GarjasGroupByOutputType = {
    id: number
    tanggal: Date
    lari: number
    garjasA: number
    pullup: number | null
    shuttleRun: number
    renang: number | null
    situp: number | null
    pushup: number | null
    pangkat: string
    skorB1: number
    skorB2: number
    skorB3: number
    skorB4: number
    garjasB: number
    nilaiAkhir: number
    penilaiId: string
    prajuritId: string
    _count: GarjasCountAggregateOutputType | null
    _avg: GarjasAvgAggregateOutputType | null
    _sum: GarjasSumAggregateOutputType | null
    _min: GarjasMinAggregateOutputType | null
    _max: GarjasMaxAggregateOutputType | null
  }

  type GetGarjasGroupByPayload<T extends GarjasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GarjasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GarjasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GarjasGroupByOutputType[P]>
            : GetScalarType<T[P], GarjasGroupByOutputType[P]>
        }
      >
    >


  export type GarjasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    lari?: boolean
    garjasA?: boolean
    pullup?: boolean
    shuttleRun?: boolean
    renang?: boolean
    situp?: boolean
    pushup?: boolean
    pangkat?: boolean
    skorB1?: boolean
    skorB2?: boolean
    skorB3?: boolean
    skorB4?: boolean
    garjasB?: boolean
    nilaiAkhir?: boolean
    penilaiId?: boolean
    prajuritId?: boolean
    penilai?: boolean | UserDefaultArgs<ExtArgs>
    prajurit?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["garjas"]>



  export type GarjasSelectScalar = {
    id?: boolean
    tanggal?: boolean
    lari?: boolean
    garjasA?: boolean
    pullup?: boolean
    shuttleRun?: boolean
    renang?: boolean
    situp?: boolean
    pushup?: boolean
    pangkat?: boolean
    skorB1?: boolean
    skorB2?: boolean
    skorB3?: boolean
    skorB4?: boolean
    garjasB?: boolean
    nilaiAkhir?: boolean
    penilaiId?: boolean
    prajuritId?: boolean
  }

  export type GarjasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "lari" | "garjasA" | "pullup" | "shuttleRun" | "renang" | "situp" | "pushup" | "pangkat" | "skorB1" | "skorB2" | "skorB3" | "skorB4" | "garjasB" | "nilaiAkhir" | "penilaiId" | "prajuritId", ExtArgs["result"]["garjas"]>
  export type GarjasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penilai?: boolean | UserDefaultArgs<ExtArgs>
    prajurit?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GarjasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Garjas"
    objects: {
      penilai: Prisma.$UserPayload<ExtArgs>
      prajurit: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tanggal: Date
      lari: number
      garjasA: number
      pullup: number | null
      shuttleRun: number
      renang: number | null
      situp: number | null
      pushup: number | null
      pangkat: string
      skorB1: number
      skorB2: number
      skorB3: number
      skorB4: number
      garjasB: number
      nilaiAkhir: number
      penilaiId: string
      prajuritId: string
    }, ExtArgs["result"]["garjas"]>
    composites: {}
  }

  type GarjasGetPayload<S extends boolean | null | undefined | GarjasDefaultArgs> = $Result.GetResult<Prisma.$GarjasPayload, S>

  type GarjasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GarjasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GarjasCountAggregateInputType | true
    }

  export interface GarjasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Garjas'], meta: { name: 'Garjas' } }
    /**
     * Find zero or one Garjas that matches the filter.
     * @param {GarjasFindUniqueArgs} args - Arguments to find a Garjas
     * @example
     * // Get one Garjas
     * const garjas = await prisma.garjas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GarjasFindUniqueArgs>(args: SelectSubset<T, GarjasFindUniqueArgs<ExtArgs>>): Prisma__GarjasClient<$Result.GetResult<Prisma.$GarjasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Garjas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GarjasFindUniqueOrThrowArgs} args - Arguments to find a Garjas
     * @example
     * // Get one Garjas
     * const garjas = await prisma.garjas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GarjasFindUniqueOrThrowArgs>(args: SelectSubset<T, GarjasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GarjasClient<$Result.GetResult<Prisma.$GarjasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Garjas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarjasFindFirstArgs} args - Arguments to find a Garjas
     * @example
     * // Get one Garjas
     * const garjas = await prisma.garjas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GarjasFindFirstArgs>(args?: SelectSubset<T, GarjasFindFirstArgs<ExtArgs>>): Prisma__GarjasClient<$Result.GetResult<Prisma.$GarjasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Garjas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarjasFindFirstOrThrowArgs} args - Arguments to find a Garjas
     * @example
     * // Get one Garjas
     * const garjas = await prisma.garjas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GarjasFindFirstOrThrowArgs>(args?: SelectSubset<T, GarjasFindFirstOrThrowArgs<ExtArgs>>): Prisma__GarjasClient<$Result.GetResult<Prisma.$GarjasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Garjas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarjasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Garjas
     * const garjas = await prisma.garjas.findMany()
     * 
     * // Get first 10 Garjas
     * const garjas = await prisma.garjas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const garjasWithIdOnly = await prisma.garjas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GarjasFindManyArgs>(args?: SelectSubset<T, GarjasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GarjasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Garjas.
     * @param {GarjasCreateArgs} args - Arguments to create a Garjas.
     * @example
     * // Create one Garjas
     * const Garjas = await prisma.garjas.create({
     *   data: {
     *     // ... data to create a Garjas
     *   }
     * })
     * 
     */
    create<T extends GarjasCreateArgs>(args: SelectSubset<T, GarjasCreateArgs<ExtArgs>>): Prisma__GarjasClient<$Result.GetResult<Prisma.$GarjasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Garjas.
     * @param {GarjasCreateManyArgs} args - Arguments to create many Garjas.
     * @example
     * // Create many Garjas
     * const garjas = await prisma.garjas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GarjasCreateManyArgs>(args?: SelectSubset<T, GarjasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Garjas.
     * @param {GarjasDeleteArgs} args - Arguments to delete one Garjas.
     * @example
     * // Delete one Garjas
     * const Garjas = await prisma.garjas.delete({
     *   where: {
     *     // ... filter to delete one Garjas
     *   }
     * })
     * 
     */
    delete<T extends GarjasDeleteArgs>(args: SelectSubset<T, GarjasDeleteArgs<ExtArgs>>): Prisma__GarjasClient<$Result.GetResult<Prisma.$GarjasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Garjas.
     * @param {GarjasUpdateArgs} args - Arguments to update one Garjas.
     * @example
     * // Update one Garjas
     * const garjas = await prisma.garjas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GarjasUpdateArgs>(args: SelectSubset<T, GarjasUpdateArgs<ExtArgs>>): Prisma__GarjasClient<$Result.GetResult<Prisma.$GarjasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Garjas.
     * @param {GarjasDeleteManyArgs} args - Arguments to filter Garjas to delete.
     * @example
     * // Delete a few Garjas
     * const { count } = await prisma.garjas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GarjasDeleteManyArgs>(args?: SelectSubset<T, GarjasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Garjas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarjasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Garjas
     * const garjas = await prisma.garjas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GarjasUpdateManyArgs>(args: SelectSubset<T, GarjasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Garjas.
     * @param {GarjasUpsertArgs} args - Arguments to update or create a Garjas.
     * @example
     * // Update or create a Garjas
     * const garjas = await prisma.garjas.upsert({
     *   create: {
     *     // ... data to create a Garjas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Garjas we want to update
     *   }
     * })
     */
    upsert<T extends GarjasUpsertArgs>(args: SelectSubset<T, GarjasUpsertArgs<ExtArgs>>): Prisma__GarjasClient<$Result.GetResult<Prisma.$GarjasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Garjas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarjasCountArgs} args - Arguments to filter Garjas to count.
     * @example
     * // Count the number of Garjas
     * const count = await prisma.garjas.count({
     *   where: {
     *     // ... the filter for the Garjas we want to count
     *   }
     * })
    **/
    count<T extends GarjasCountArgs>(
      args?: Subset<T, GarjasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GarjasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Garjas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarjasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GarjasAggregateArgs>(args: Subset<T, GarjasAggregateArgs>): Prisma.PrismaPromise<GetGarjasAggregateType<T>>

    /**
     * Group by Garjas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarjasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GarjasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GarjasGroupByArgs['orderBy'] }
        : { orderBy?: GarjasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GarjasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGarjasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Garjas model
   */
  readonly fields: GarjasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Garjas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GarjasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penilai<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prajurit<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Garjas model
   */
  interface GarjasFieldRefs {
    readonly id: FieldRef<"Garjas", 'Int'>
    readonly tanggal: FieldRef<"Garjas", 'DateTime'>
    readonly lari: FieldRef<"Garjas", 'Int'>
    readonly garjasA: FieldRef<"Garjas", 'Float'>
    readonly pullup: FieldRef<"Garjas", 'Int'>
    readonly shuttleRun: FieldRef<"Garjas", 'Float'>
    readonly renang: FieldRef<"Garjas", 'Int'>
    readonly situp: FieldRef<"Garjas", 'Int'>
    readonly pushup: FieldRef<"Garjas", 'Int'>
    readonly pangkat: FieldRef<"Garjas", 'String'>
    readonly skorB1: FieldRef<"Garjas", 'Float'>
    readonly skorB2: FieldRef<"Garjas", 'Float'>
    readonly skorB3: FieldRef<"Garjas", 'Float'>
    readonly skorB4: FieldRef<"Garjas", 'Float'>
    readonly garjasB: FieldRef<"Garjas", 'Float'>
    readonly nilaiAkhir: FieldRef<"Garjas", 'Float'>
    readonly penilaiId: FieldRef<"Garjas", 'String'>
    readonly prajuritId: FieldRef<"Garjas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Garjas findUnique
   */
  export type GarjasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garjas
     */
    select?: GarjasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garjas
     */
    omit?: GarjasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarjasInclude<ExtArgs> | null
    /**
     * Filter, which Garjas to fetch.
     */
    where: GarjasWhereUniqueInput
  }

  /**
   * Garjas findUniqueOrThrow
   */
  export type GarjasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garjas
     */
    select?: GarjasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garjas
     */
    omit?: GarjasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarjasInclude<ExtArgs> | null
    /**
     * Filter, which Garjas to fetch.
     */
    where: GarjasWhereUniqueInput
  }

  /**
   * Garjas findFirst
   */
  export type GarjasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garjas
     */
    select?: GarjasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garjas
     */
    omit?: GarjasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarjasInclude<ExtArgs> | null
    /**
     * Filter, which Garjas to fetch.
     */
    where?: GarjasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Garjas to fetch.
     */
    orderBy?: GarjasOrderByWithRelationInput | GarjasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Garjas.
     */
    cursor?: GarjasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Garjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Garjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Garjas.
     */
    distinct?: GarjasScalarFieldEnum | GarjasScalarFieldEnum[]
  }

  /**
   * Garjas findFirstOrThrow
   */
  export type GarjasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garjas
     */
    select?: GarjasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garjas
     */
    omit?: GarjasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarjasInclude<ExtArgs> | null
    /**
     * Filter, which Garjas to fetch.
     */
    where?: GarjasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Garjas to fetch.
     */
    orderBy?: GarjasOrderByWithRelationInput | GarjasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Garjas.
     */
    cursor?: GarjasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Garjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Garjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Garjas.
     */
    distinct?: GarjasScalarFieldEnum | GarjasScalarFieldEnum[]
  }

  /**
   * Garjas findMany
   */
  export type GarjasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garjas
     */
    select?: GarjasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garjas
     */
    omit?: GarjasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarjasInclude<ExtArgs> | null
    /**
     * Filter, which Garjas to fetch.
     */
    where?: GarjasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Garjas to fetch.
     */
    orderBy?: GarjasOrderByWithRelationInput | GarjasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Garjas.
     */
    cursor?: GarjasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Garjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Garjas.
     */
    skip?: number
    distinct?: GarjasScalarFieldEnum | GarjasScalarFieldEnum[]
  }

  /**
   * Garjas create
   */
  export type GarjasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garjas
     */
    select?: GarjasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garjas
     */
    omit?: GarjasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarjasInclude<ExtArgs> | null
    /**
     * The data needed to create a Garjas.
     */
    data: XOR<GarjasCreateInput, GarjasUncheckedCreateInput>
  }

  /**
   * Garjas createMany
   */
  export type GarjasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Garjas.
     */
    data: GarjasCreateManyInput | GarjasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Garjas update
   */
  export type GarjasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garjas
     */
    select?: GarjasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garjas
     */
    omit?: GarjasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarjasInclude<ExtArgs> | null
    /**
     * The data needed to update a Garjas.
     */
    data: XOR<GarjasUpdateInput, GarjasUncheckedUpdateInput>
    /**
     * Choose, which Garjas to update.
     */
    where: GarjasWhereUniqueInput
  }

  /**
   * Garjas updateMany
   */
  export type GarjasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Garjas.
     */
    data: XOR<GarjasUpdateManyMutationInput, GarjasUncheckedUpdateManyInput>
    /**
     * Filter which Garjas to update
     */
    where?: GarjasWhereInput
    /**
     * Limit how many Garjas to update.
     */
    limit?: number
  }

  /**
   * Garjas upsert
   */
  export type GarjasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garjas
     */
    select?: GarjasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garjas
     */
    omit?: GarjasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarjasInclude<ExtArgs> | null
    /**
     * The filter to search for the Garjas to update in case it exists.
     */
    where: GarjasWhereUniqueInput
    /**
     * In case the Garjas found by the `where` argument doesn't exist, create a new Garjas with this data.
     */
    create: XOR<GarjasCreateInput, GarjasUncheckedCreateInput>
    /**
     * In case the Garjas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GarjasUpdateInput, GarjasUncheckedUpdateInput>
  }

  /**
   * Garjas delete
   */
  export type GarjasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garjas
     */
    select?: GarjasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garjas
     */
    omit?: GarjasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarjasInclude<ExtArgs> | null
    /**
     * Filter which Garjas to delete.
     */
    where: GarjasWhereUniqueInput
  }

  /**
   * Garjas deleteMany
   */
  export type GarjasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Garjas to delete
     */
    where?: GarjasWhereInput
    /**
     * Limit how many Garjas to delete.
     */
    limit?: number
  }

  /**
   * Garjas without action
   */
  export type GarjasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garjas
     */
    select?: GarjasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garjas
     */
    omit?: GarjasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarjasInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    name: string | null
    username: string | null
    password: string | null
    avatar: string | null
    lastLogin: Date | null
    role: $Enums.Role | null
    kesatuanId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    name: string | null
    username: string | null
    password: string | null
    avatar: string | null
    lastLogin: Date | null
    role: $Enums.Role | null
    kesatuanId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    name: number
    username: number
    password: number
    avatar: number
    lastLogin: number
    role: number
    kesatuanId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    name?: true
    username?: true
    password?: true
    avatar?: true
    lastLogin?: true
    role?: true
    kesatuanId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    name?: true
    username?: true
    password?: true
    avatar?: true
    lastLogin?: true
    role?: true
    kesatuanId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    name?: true
    username?: true
    password?: true
    avatar?: true
    lastLogin?: true
    role?: true
    kesatuanId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    name: string
    username: string
    password: string
    avatar: string | null
    lastLogin: Date | null
    role: $Enums.Role
    kesatuanId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    lastLogin?: boolean
    role?: boolean
    kesatuanId?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    penilaianGarjasDibuat?: boolean | User$penilaianGarjasDibuatArgs<ExtArgs>
    penilaianGarjasDidapatkan?: boolean | User$penilaianGarjasDidapatkanArgs<ExtArgs>
    kesatuan?: boolean | User$kesatuanArgs<ExtArgs>
    RefreshToken?: boolean | User$RefreshTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    lastLogin?: boolean
    role?: boolean
    kesatuanId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "deletedAt" | "name" | "username" | "password" | "avatar" | "lastLogin" | "role" | "kesatuanId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    penilaianGarjasDibuat?: boolean | User$penilaianGarjasDibuatArgs<ExtArgs>
    penilaianGarjasDidapatkan?: boolean | User$penilaianGarjasDidapatkanArgs<ExtArgs>
    kesatuan?: boolean | User$kesatuanArgs<ExtArgs>
    RefreshToken?: boolean | User$RefreshTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      penilaianGarjasDibuat: Prisma.$GarjasPayload<ExtArgs>[]
      penilaianGarjasDidapatkan: Prisma.$GarjasPayload<ExtArgs>[]
      kesatuan: Prisma.$KesatuanPayload<ExtArgs> | null
      RefreshToken: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      name: string
      username: string
      password: string
      avatar: string | null
      lastLogin: Date | null
      role: $Enums.Role
      kesatuanId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    penilaianGarjasDibuat<T extends User$penilaianGarjasDibuatArgs<ExtArgs> = {}>(args?: Subset<T, User$penilaianGarjasDibuatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GarjasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    penilaianGarjasDidapatkan<T extends User$penilaianGarjasDidapatkanArgs<ExtArgs> = {}>(args?: Subset<T, User$penilaianGarjasDidapatkanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GarjasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kesatuan<T extends User$kesatuanArgs<ExtArgs> = {}>(args?: Subset<T, User$kesatuanArgs<ExtArgs>>): Prisma__KesatuanClient<$Result.GetResult<Prisma.$KesatuanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    RefreshToken<T extends User$RefreshTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$RefreshTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly kesatuanId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.penilaianGarjasDibuat
   */
  export type User$penilaianGarjasDibuatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garjas
     */
    select?: GarjasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garjas
     */
    omit?: GarjasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarjasInclude<ExtArgs> | null
    where?: GarjasWhereInput
    orderBy?: GarjasOrderByWithRelationInput | GarjasOrderByWithRelationInput[]
    cursor?: GarjasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GarjasScalarFieldEnum | GarjasScalarFieldEnum[]
  }

  /**
   * User.penilaianGarjasDidapatkan
   */
  export type User$penilaianGarjasDidapatkanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garjas
     */
    select?: GarjasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garjas
     */
    omit?: GarjasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarjasInclude<ExtArgs> | null
    where?: GarjasWhereInput
    orderBy?: GarjasOrderByWithRelationInput | GarjasOrderByWithRelationInput[]
    cursor?: GarjasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GarjasScalarFieldEnum | GarjasScalarFieldEnum[]
  }

  /**
   * User.kesatuan
   */
  export type User$kesatuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kesatuan
     */
    select?: KesatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kesatuan
     */
    omit?: KesatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KesatuanInclude<ExtArgs> | null
    where?: KesatuanWhereInput
  }

  /**
   * User.RefreshToken
   */
  export type User$RefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Kesatuan
   */

  export type AggregateKesatuan = {
    _count: KesatuanCountAggregateOutputType | null
    _min: KesatuanMinAggregateOutputType | null
    _max: KesatuanMaxAggregateOutputType | null
  }

  export type KesatuanMinAggregateOutputType = {
    id: string | null
    nama: string | null
    motto: string | null
    logo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KesatuanMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    motto: string | null
    logo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KesatuanCountAggregateOutputType = {
    id: number
    nama: number
    motto: number
    logo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KesatuanMinAggregateInputType = {
    id?: true
    nama?: true
    motto?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KesatuanMaxAggregateInputType = {
    id?: true
    nama?: true
    motto?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KesatuanCountAggregateInputType = {
    id?: true
    nama?: true
    motto?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KesatuanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kesatuan to aggregate.
     */
    where?: KesatuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kesatuans to fetch.
     */
    orderBy?: KesatuanOrderByWithRelationInput | KesatuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KesatuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kesatuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kesatuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kesatuans
    **/
    _count?: true | KesatuanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KesatuanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KesatuanMaxAggregateInputType
  }

  export type GetKesatuanAggregateType<T extends KesatuanAggregateArgs> = {
        [P in keyof T & keyof AggregateKesatuan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKesatuan[P]>
      : GetScalarType<T[P], AggregateKesatuan[P]>
  }




  export type KesatuanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KesatuanWhereInput
    orderBy?: KesatuanOrderByWithAggregationInput | KesatuanOrderByWithAggregationInput[]
    by: KesatuanScalarFieldEnum[] | KesatuanScalarFieldEnum
    having?: KesatuanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KesatuanCountAggregateInputType | true
    _min?: KesatuanMinAggregateInputType
    _max?: KesatuanMaxAggregateInputType
  }

  export type KesatuanGroupByOutputType = {
    id: string
    nama: string
    motto: string | null
    logo: string | null
    createdAt: Date
    updatedAt: Date
    _count: KesatuanCountAggregateOutputType | null
    _min: KesatuanMinAggregateOutputType | null
    _max: KesatuanMaxAggregateOutputType | null
  }

  type GetKesatuanGroupByPayload<T extends KesatuanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KesatuanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KesatuanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KesatuanGroupByOutputType[P]>
            : GetScalarType<T[P], KesatuanGroupByOutputType[P]>
        }
      >
    >


  export type KesatuanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    motto?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Kesatuan$usersArgs<ExtArgs>
    _count?: boolean | KesatuanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kesatuan"]>



  export type KesatuanSelectScalar = {
    id?: boolean
    nama?: boolean
    motto?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KesatuanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "motto" | "logo" | "createdAt" | "updatedAt", ExtArgs["result"]["kesatuan"]>
  export type KesatuanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Kesatuan$usersArgs<ExtArgs>
    _count?: boolean | KesatuanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KesatuanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kesatuan"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      motto: string | null
      logo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kesatuan"]>
    composites: {}
  }

  type KesatuanGetPayload<S extends boolean | null | undefined | KesatuanDefaultArgs> = $Result.GetResult<Prisma.$KesatuanPayload, S>

  type KesatuanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KesatuanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KesatuanCountAggregateInputType | true
    }

  export interface KesatuanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kesatuan'], meta: { name: 'Kesatuan' } }
    /**
     * Find zero or one Kesatuan that matches the filter.
     * @param {KesatuanFindUniqueArgs} args - Arguments to find a Kesatuan
     * @example
     * // Get one Kesatuan
     * const kesatuan = await prisma.kesatuan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KesatuanFindUniqueArgs>(args: SelectSubset<T, KesatuanFindUniqueArgs<ExtArgs>>): Prisma__KesatuanClient<$Result.GetResult<Prisma.$KesatuanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kesatuan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KesatuanFindUniqueOrThrowArgs} args - Arguments to find a Kesatuan
     * @example
     * // Get one Kesatuan
     * const kesatuan = await prisma.kesatuan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KesatuanFindUniqueOrThrowArgs>(args: SelectSubset<T, KesatuanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KesatuanClient<$Result.GetResult<Prisma.$KesatuanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kesatuan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KesatuanFindFirstArgs} args - Arguments to find a Kesatuan
     * @example
     * // Get one Kesatuan
     * const kesatuan = await prisma.kesatuan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KesatuanFindFirstArgs>(args?: SelectSubset<T, KesatuanFindFirstArgs<ExtArgs>>): Prisma__KesatuanClient<$Result.GetResult<Prisma.$KesatuanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kesatuan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KesatuanFindFirstOrThrowArgs} args - Arguments to find a Kesatuan
     * @example
     * // Get one Kesatuan
     * const kesatuan = await prisma.kesatuan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KesatuanFindFirstOrThrowArgs>(args?: SelectSubset<T, KesatuanFindFirstOrThrowArgs<ExtArgs>>): Prisma__KesatuanClient<$Result.GetResult<Prisma.$KesatuanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kesatuans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KesatuanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kesatuans
     * const kesatuans = await prisma.kesatuan.findMany()
     * 
     * // Get first 10 Kesatuans
     * const kesatuans = await prisma.kesatuan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kesatuanWithIdOnly = await prisma.kesatuan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KesatuanFindManyArgs>(args?: SelectSubset<T, KesatuanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KesatuanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kesatuan.
     * @param {KesatuanCreateArgs} args - Arguments to create a Kesatuan.
     * @example
     * // Create one Kesatuan
     * const Kesatuan = await prisma.kesatuan.create({
     *   data: {
     *     // ... data to create a Kesatuan
     *   }
     * })
     * 
     */
    create<T extends KesatuanCreateArgs>(args: SelectSubset<T, KesatuanCreateArgs<ExtArgs>>): Prisma__KesatuanClient<$Result.GetResult<Prisma.$KesatuanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kesatuans.
     * @param {KesatuanCreateManyArgs} args - Arguments to create many Kesatuans.
     * @example
     * // Create many Kesatuans
     * const kesatuan = await prisma.kesatuan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KesatuanCreateManyArgs>(args?: SelectSubset<T, KesatuanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kesatuan.
     * @param {KesatuanDeleteArgs} args - Arguments to delete one Kesatuan.
     * @example
     * // Delete one Kesatuan
     * const Kesatuan = await prisma.kesatuan.delete({
     *   where: {
     *     // ... filter to delete one Kesatuan
     *   }
     * })
     * 
     */
    delete<T extends KesatuanDeleteArgs>(args: SelectSubset<T, KesatuanDeleteArgs<ExtArgs>>): Prisma__KesatuanClient<$Result.GetResult<Prisma.$KesatuanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kesatuan.
     * @param {KesatuanUpdateArgs} args - Arguments to update one Kesatuan.
     * @example
     * // Update one Kesatuan
     * const kesatuan = await prisma.kesatuan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KesatuanUpdateArgs>(args: SelectSubset<T, KesatuanUpdateArgs<ExtArgs>>): Prisma__KesatuanClient<$Result.GetResult<Prisma.$KesatuanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kesatuans.
     * @param {KesatuanDeleteManyArgs} args - Arguments to filter Kesatuans to delete.
     * @example
     * // Delete a few Kesatuans
     * const { count } = await prisma.kesatuan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KesatuanDeleteManyArgs>(args?: SelectSubset<T, KesatuanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kesatuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KesatuanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kesatuans
     * const kesatuan = await prisma.kesatuan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KesatuanUpdateManyArgs>(args: SelectSubset<T, KesatuanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kesatuan.
     * @param {KesatuanUpsertArgs} args - Arguments to update or create a Kesatuan.
     * @example
     * // Update or create a Kesatuan
     * const kesatuan = await prisma.kesatuan.upsert({
     *   create: {
     *     // ... data to create a Kesatuan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kesatuan we want to update
     *   }
     * })
     */
    upsert<T extends KesatuanUpsertArgs>(args: SelectSubset<T, KesatuanUpsertArgs<ExtArgs>>): Prisma__KesatuanClient<$Result.GetResult<Prisma.$KesatuanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kesatuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KesatuanCountArgs} args - Arguments to filter Kesatuans to count.
     * @example
     * // Count the number of Kesatuans
     * const count = await prisma.kesatuan.count({
     *   where: {
     *     // ... the filter for the Kesatuans we want to count
     *   }
     * })
    **/
    count<T extends KesatuanCountArgs>(
      args?: Subset<T, KesatuanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KesatuanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kesatuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KesatuanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KesatuanAggregateArgs>(args: Subset<T, KesatuanAggregateArgs>): Prisma.PrismaPromise<GetKesatuanAggregateType<T>>

    /**
     * Group by Kesatuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KesatuanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KesatuanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KesatuanGroupByArgs['orderBy'] }
        : { orderBy?: KesatuanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KesatuanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKesatuanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kesatuan model
   */
  readonly fields: KesatuanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kesatuan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KesatuanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Kesatuan$usersArgs<ExtArgs> = {}>(args?: Subset<T, Kesatuan$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kesatuan model
   */
  interface KesatuanFieldRefs {
    readonly id: FieldRef<"Kesatuan", 'String'>
    readonly nama: FieldRef<"Kesatuan", 'String'>
    readonly motto: FieldRef<"Kesatuan", 'String'>
    readonly logo: FieldRef<"Kesatuan", 'String'>
    readonly createdAt: FieldRef<"Kesatuan", 'DateTime'>
    readonly updatedAt: FieldRef<"Kesatuan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kesatuan findUnique
   */
  export type KesatuanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kesatuan
     */
    select?: KesatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kesatuan
     */
    omit?: KesatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KesatuanInclude<ExtArgs> | null
    /**
     * Filter, which Kesatuan to fetch.
     */
    where: KesatuanWhereUniqueInput
  }

  /**
   * Kesatuan findUniqueOrThrow
   */
  export type KesatuanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kesatuan
     */
    select?: KesatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kesatuan
     */
    omit?: KesatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KesatuanInclude<ExtArgs> | null
    /**
     * Filter, which Kesatuan to fetch.
     */
    where: KesatuanWhereUniqueInput
  }

  /**
   * Kesatuan findFirst
   */
  export type KesatuanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kesatuan
     */
    select?: KesatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kesatuan
     */
    omit?: KesatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KesatuanInclude<ExtArgs> | null
    /**
     * Filter, which Kesatuan to fetch.
     */
    where?: KesatuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kesatuans to fetch.
     */
    orderBy?: KesatuanOrderByWithRelationInput | KesatuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kesatuans.
     */
    cursor?: KesatuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kesatuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kesatuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kesatuans.
     */
    distinct?: KesatuanScalarFieldEnum | KesatuanScalarFieldEnum[]
  }

  /**
   * Kesatuan findFirstOrThrow
   */
  export type KesatuanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kesatuan
     */
    select?: KesatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kesatuan
     */
    omit?: KesatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KesatuanInclude<ExtArgs> | null
    /**
     * Filter, which Kesatuan to fetch.
     */
    where?: KesatuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kesatuans to fetch.
     */
    orderBy?: KesatuanOrderByWithRelationInput | KesatuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kesatuans.
     */
    cursor?: KesatuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kesatuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kesatuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kesatuans.
     */
    distinct?: KesatuanScalarFieldEnum | KesatuanScalarFieldEnum[]
  }

  /**
   * Kesatuan findMany
   */
  export type KesatuanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kesatuan
     */
    select?: KesatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kesatuan
     */
    omit?: KesatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KesatuanInclude<ExtArgs> | null
    /**
     * Filter, which Kesatuans to fetch.
     */
    where?: KesatuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kesatuans to fetch.
     */
    orderBy?: KesatuanOrderByWithRelationInput | KesatuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kesatuans.
     */
    cursor?: KesatuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kesatuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kesatuans.
     */
    skip?: number
    distinct?: KesatuanScalarFieldEnum | KesatuanScalarFieldEnum[]
  }

  /**
   * Kesatuan create
   */
  export type KesatuanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kesatuan
     */
    select?: KesatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kesatuan
     */
    omit?: KesatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KesatuanInclude<ExtArgs> | null
    /**
     * The data needed to create a Kesatuan.
     */
    data: XOR<KesatuanCreateInput, KesatuanUncheckedCreateInput>
  }

  /**
   * Kesatuan createMany
   */
  export type KesatuanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kesatuans.
     */
    data: KesatuanCreateManyInput | KesatuanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kesatuan update
   */
  export type KesatuanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kesatuan
     */
    select?: KesatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kesatuan
     */
    omit?: KesatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KesatuanInclude<ExtArgs> | null
    /**
     * The data needed to update a Kesatuan.
     */
    data: XOR<KesatuanUpdateInput, KesatuanUncheckedUpdateInput>
    /**
     * Choose, which Kesatuan to update.
     */
    where: KesatuanWhereUniqueInput
  }

  /**
   * Kesatuan updateMany
   */
  export type KesatuanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kesatuans.
     */
    data: XOR<KesatuanUpdateManyMutationInput, KesatuanUncheckedUpdateManyInput>
    /**
     * Filter which Kesatuans to update
     */
    where?: KesatuanWhereInput
    /**
     * Limit how many Kesatuans to update.
     */
    limit?: number
  }

  /**
   * Kesatuan upsert
   */
  export type KesatuanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kesatuan
     */
    select?: KesatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kesatuan
     */
    omit?: KesatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KesatuanInclude<ExtArgs> | null
    /**
     * The filter to search for the Kesatuan to update in case it exists.
     */
    where: KesatuanWhereUniqueInput
    /**
     * In case the Kesatuan found by the `where` argument doesn't exist, create a new Kesatuan with this data.
     */
    create: XOR<KesatuanCreateInput, KesatuanUncheckedCreateInput>
    /**
     * In case the Kesatuan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KesatuanUpdateInput, KesatuanUncheckedUpdateInput>
  }

  /**
   * Kesatuan delete
   */
  export type KesatuanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kesatuan
     */
    select?: KesatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kesatuan
     */
    omit?: KesatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KesatuanInclude<ExtArgs> | null
    /**
     * Filter which Kesatuan to delete.
     */
    where: KesatuanWhereUniqueInput
  }

  /**
   * Kesatuan deleteMany
   */
  export type KesatuanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kesatuans to delete
     */
    where?: KesatuanWhereInput
    /**
     * Limit how many Kesatuans to delete.
     */
    limit?: number
  }

  /**
   * Kesatuan.users
   */
  export type Kesatuan$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Kesatuan without action
   */
  export type KesatuanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kesatuan
     */
    select?: KesatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kesatuan
     */
    omit?: KesatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KesatuanInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    umur: number | null
    golongan: number | null
    beratBadan: number | null
    tinggiBadan: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    umur: number | null
    golongan: number | null
    beratBadan: number | null
    tinggiBadan: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    umur: number | null
    jenisKelamin: string | null
    golongan: number | null
    userId: string | null
    pangkat: string | null
    beratBadan: number | null
    tinggiBadan: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    umur: number | null
    jenisKelamin: string | null
    golongan: number | null
    userId: string | null
    pangkat: string | null
    beratBadan: number | null
    tinggiBadan: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    umur: number
    jenisKelamin: number
    golongan: number
    userId: number
    pangkat: number
    beratBadan: number
    tinggiBadan: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    umur?: true
    golongan?: true
    beratBadan?: true
    tinggiBadan?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    umur?: true
    golongan?: true
    beratBadan?: true
    tinggiBadan?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    umur?: true
    jenisKelamin?: true
    golongan?: true
    userId?: true
    pangkat?: true
    beratBadan?: true
    tinggiBadan?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    umur?: true
    jenisKelamin?: true
    golongan?: true
    userId?: true
    pangkat?: true
    beratBadan?: true
    tinggiBadan?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    umur?: true
    jenisKelamin?: true
    golongan?: true
    userId?: true
    pangkat?: true
    beratBadan?: true
    tinggiBadan?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    umur: number
    jenisKelamin: string
    golongan: number
    userId: string
    pangkat: string
    beratBadan: number | null
    tinggiBadan: number | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    umur?: boolean
    jenisKelamin?: boolean
    golongan?: boolean
    userId?: boolean
    pangkat?: boolean
    beratBadan?: boolean
    tinggiBadan?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>



  export type ProfileSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    umur?: boolean
    jenisKelamin?: boolean
    golongan?: boolean
    userId?: boolean
    pangkat?: boolean
    beratBadan?: boolean
    tinggiBadan?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "deletedAt" | "umur" | "jenisKelamin" | "golongan" | "userId" | "pangkat" | "beratBadan" | "tinggiBadan", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      umur: number
      jenisKelamin: string
      golongan: number
      userId: string
      pangkat: string
      beratBadan: number | null
      tinggiBadan: number | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
    readonly deletedAt: FieldRef<"Profile", 'DateTime'>
    readonly umur: FieldRef<"Profile", 'Int'>
    readonly jenisKelamin: FieldRef<"Profile", 'String'>
    readonly golongan: FieldRef<"Profile", 'Int'>
    readonly userId: FieldRef<"Profile", 'String'>
    readonly pangkat: FieldRef<"Profile", 'String'>
    readonly beratBadan: FieldRef<"Profile", 'Int'>
    readonly tinggiBadan: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    revoked: boolean | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    revoked: boolean | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    revoked: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    revoked?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    revoked?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    revoked?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    revoked: boolean
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    revoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>



  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    revoked?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt" | "updatedAt" | "revoked", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
      revoked: boolean
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly updatedAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revoked: FieldRef<"RefreshToken", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Berita
   */

  export type AggregateBerita = {
    _count: BeritaCountAggregateOutputType | null
    _avg: BeritaAvgAggregateOutputType | null
    _sum: BeritaSumAggregateOutputType | null
    _min: BeritaMinAggregateOutputType | null
    _max: BeritaMaxAggregateOutputType | null
  }

  export type BeritaAvgAggregateOutputType = {
    like: number | null
    dislike: number | null
  }

  export type BeritaSumAggregateOutputType = {
    like: number | null
    dislike: number | null
  }

  export type BeritaMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    judul: string | null
    deskripsi: string | null
    thumbnail: string | null
    penulis: string | null
    content: string | null
    like: number | null
    dislike: number | null
  }

  export type BeritaMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    judul: string | null
    deskripsi: string | null
    thumbnail: string | null
    penulis: string | null
    content: string | null
    like: number | null
    dislike: number | null
  }

  export type BeritaCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    judul: number
    deskripsi: number
    thumbnail: number
    penulis: number
    content: number
    like: number
    dislike: number
    _all: number
  }


  export type BeritaAvgAggregateInputType = {
    like?: true
    dislike?: true
  }

  export type BeritaSumAggregateInputType = {
    like?: true
    dislike?: true
  }

  export type BeritaMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    judul?: true
    deskripsi?: true
    thumbnail?: true
    penulis?: true
    content?: true
    like?: true
    dislike?: true
  }

  export type BeritaMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    judul?: true
    deskripsi?: true
    thumbnail?: true
    penulis?: true
    content?: true
    like?: true
    dislike?: true
  }

  export type BeritaCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    judul?: true
    deskripsi?: true
    thumbnail?: true
    penulis?: true
    content?: true
    like?: true
    dislike?: true
    _all?: true
  }

  export type BeritaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Berita to aggregate.
     */
    where?: BeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beritas to fetch.
     */
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Beritas
    **/
    _count?: true | BeritaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BeritaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BeritaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeritaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeritaMaxAggregateInputType
  }

  export type GetBeritaAggregateType<T extends BeritaAggregateArgs> = {
        [P in keyof T & keyof AggregateBerita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBerita[P]>
      : GetScalarType<T[P], AggregateBerita[P]>
  }




  export type BeritaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeritaWhereInput
    orderBy?: BeritaOrderByWithAggregationInput | BeritaOrderByWithAggregationInput[]
    by: BeritaScalarFieldEnum[] | BeritaScalarFieldEnum
    having?: BeritaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeritaCountAggregateInputType | true
    _avg?: BeritaAvgAggregateInputType
    _sum?: BeritaSumAggregateInputType
    _min?: BeritaMinAggregateInputType
    _max?: BeritaMaxAggregateInputType
  }

  export type BeritaGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    judul: string
    deskripsi: string | null
    thumbnail: string
    penulis: string
    content: string
    like: number
    dislike: number
    _count: BeritaCountAggregateOutputType | null
    _avg: BeritaAvgAggregateOutputType | null
    _sum: BeritaSumAggregateOutputType | null
    _min: BeritaMinAggregateOutputType | null
    _max: BeritaMaxAggregateOutputType | null
  }

  type GetBeritaGroupByPayload<T extends BeritaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeritaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeritaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeritaGroupByOutputType[P]>
            : GetScalarType<T[P], BeritaGroupByOutputType[P]>
        }
      >
    >


  export type BeritaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    judul?: boolean
    deskripsi?: boolean
    thumbnail?: boolean
    penulis?: boolean
    content?: boolean
    like?: boolean
    dislike?: boolean
  }, ExtArgs["result"]["berita"]>



  export type BeritaSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    judul?: boolean
    deskripsi?: boolean
    thumbnail?: boolean
    penulis?: boolean
    content?: boolean
    like?: boolean
    dislike?: boolean
  }

  export type BeritaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "deletedAt" | "judul" | "deskripsi" | "thumbnail" | "penulis" | "content" | "like" | "dislike", ExtArgs["result"]["berita"]>

  export type $BeritaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Berita"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      judul: string
      deskripsi: string | null
      thumbnail: string
      penulis: string
      content: string
      like: number
      dislike: number
    }, ExtArgs["result"]["berita"]>
    composites: {}
  }

  type BeritaGetPayload<S extends boolean | null | undefined | BeritaDefaultArgs> = $Result.GetResult<Prisma.$BeritaPayload, S>

  type BeritaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BeritaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BeritaCountAggregateInputType | true
    }

  export interface BeritaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Berita'], meta: { name: 'Berita' } }
    /**
     * Find zero or one Berita that matches the filter.
     * @param {BeritaFindUniqueArgs} args - Arguments to find a Berita
     * @example
     * // Get one Berita
     * const berita = await prisma.berita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BeritaFindUniqueArgs>(args: SelectSubset<T, BeritaFindUniqueArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Berita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BeritaFindUniqueOrThrowArgs} args - Arguments to find a Berita
     * @example
     * // Get one Berita
     * const berita = await prisma.berita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BeritaFindUniqueOrThrowArgs>(args: SelectSubset<T, BeritaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Berita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaFindFirstArgs} args - Arguments to find a Berita
     * @example
     * // Get one Berita
     * const berita = await prisma.berita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BeritaFindFirstArgs>(args?: SelectSubset<T, BeritaFindFirstArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Berita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaFindFirstOrThrowArgs} args - Arguments to find a Berita
     * @example
     * // Get one Berita
     * const berita = await prisma.berita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BeritaFindFirstOrThrowArgs>(args?: SelectSubset<T, BeritaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Beritas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beritas
     * const beritas = await prisma.berita.findMany()
     * 
     * // Get first 10 Beritas
     * const beritas = await prisma.berita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beritaWithIdOnly = await prisma.berita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BeritaFindManyArgs>(args?: SelectSubset<T, BeritaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Berita.
     * @param {BeritaCreateArgs} args - Arguments to create a Berita.
     * @example
     * // Create one Berita
     * const Berita = await prisma.berita.create({
     *   data: {
     *     // ... data to create a Berita
     *   }
     * })
     * 
     */
    create<T extends BeritaCreateArgs>(args: SelectSubset<T, BeritaCreateArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Beritas.
     * @param {BeritaCreateManyArgs} args - Arguments to create many Beritas.
     * @example
     * // Create many Beritas
     * const berita = await prisma.berita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BeritaCreateManyArgs>(args?: SelectSubset<T, BeritaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Berita.
     * @param {BeritaDeleteArgs} args - Arguments to delete one Berita.
     * @example
     * // Delete one Berita
     * const Berita = await prisma.berita.delete({
     *   where: {
     *     // ... filter to delete one Berita
     *   }
     * })
     * 
     */
    delete<T extends BeritaDeleteArgs>(args: SelectSubset<T, BeritaDeleteArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Berita.
     * @param {BeritaUpdateArgs} args - Arguments to update one Berita.
     * @example
     * // Update one Berita
     * const berita = await prisma.berita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BeritaUpdateArgs>(args: SelectSubset<T, BeritaUpdateArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Beritas.
     * @param {BeritaDeleteManyArgs} args - Arguments to filter Beritas to delete.
     * @example
     * // Delete a few Beritas
     * const { count } = await prisma.berita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BeritaDeleteManyArgs>(args?: SelectSubset<T, BeritaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beritas
     * const berita = await prisma.berita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BeritaUpdateManyArgs>(args: SelectSubset<T, BeritaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Berita.
     * @param {BeritaUpsertArgs} args - Arguments to update or create a Berita.
     * @example
     * // Update or create a Berita
     * const berita = await prisma.berita.upsert({
     *   create: {
     *     // ... data to create a Berita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Berita we want to update
     *   }
     * })
     */
    upsert<T extends BeritaUpsertArgs>(args: SelectSubset<T, BeritaUpsertArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Beritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaCountArgs} args - Arguments to filter Beritas to count.
     * @example
     * // Count the number of Beritas
     * const count = await prisma.berita.count({
     *   where: {
     *     // ... the filter for the Beritas we want to count
     *   }
     * })
    **/
    count<T extends BeritaCountArgs>(
      args?: Subset<T, BeritaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeritaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Berita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BeritaAggregateArgs>(args: Subset<T, BeritaAggregateArgs>): Prisma.PrismaPromise<GetBeritaAggregateType<T>>

    /**
     * Group by Berita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BeritaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BeritaGroupByArgs['orderBy'] }
        : { orderBy?: BeritaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BeritaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeritaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Berita model
   */
  readonly fields: BeritaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Berita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BeritaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Berita model
   */
  interface BeritaFieldRefs {
    readonly id: FieldRef<"Berita", 'String'>
    readonly createdAt: FieldRef<"Berita", 'DateTime'>
    readonly updatedAt: FieldRef<"Berita", 'DateTime'>
    readonly deletedAt: FieldRef<"Berita", 'DateTime'>
    readonly judul: FieldRef<"Berita", 'String'>
    readonly deskripsi: FieldRef<"Berita", 'String'>
    readonly thumbnail: FieldRef<"Berita", 'String'>
    readonly penulis: FieldRef<"Berita", 'String'>
    readonly content: FieldRef<"Berita", 'String'>
    readonly like: FieldRef<"Berita", 'Int'>
    readonly dislike: FieldRef<"Berita", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Berita findUnique
   */
  export type BeritaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Filter, which Berita to fetch.
     */
    where: BeritaWhereUniqueInput
  }

  /**
   * Berita findUniqueOrThrow
   */
  export type BeritaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Filter, which Berita to fetch.
     */
    where: BeritaWhereUniqueInput
  }

  /**
   * Berita findFirst
   */
  export type BeritaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Filter, which Berita to fetch.
     */
    where?: BeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beritas to fetch.
     */
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beritas.
     */
    cursor?: BeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beritas.
     */
    distinct?: BeritaScalarFieldEnum | BeritaScalarFieldEnum[]
  }

  /**
   * Berita findFirstOrThrow
   */
  export type BeritaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Filter, which Berita to fetch.
     */
    where?: BeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beritas to fetch.
     */
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beritas.
     */
    cursor?: BeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beritas.
     */
    distinct?: BeritaScalarFieldEnum | BeritaScalarFieldEnum[]
  }

  /**
   * Berita findMany
   */
  export type BeritaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Filter, which Beritas to fetch.
     */
    where?: BeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beritas to fetch.
     */
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Beritas.
     */
    cursor?: BeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beritas.
     */
    skip?: number
    distinct?: BeritaScalarFieldEnum | BeritaScalarFieldEnum[]
  }

  /**
   * Berita create
   */
  export type BeritaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * The data needed to create a Berita.
     */
    data: XOR<BeritaCreateInput, BeritaUncheckedCreateInput>
  }

  /**
   * Berita createMany
   */
  export type BeritaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Beritas.
     */
    data: BeritaCreateManyInput | BeritaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Berita update
   */
  export type BeritaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * The data needed to update a Berita.
     */
    data: XOR<BeritaUpdateInput, BeritaUncheckedUpdateInput>
    /**
     * Choose, which Berita to update.
     */
    where: BeritaWhereUniqueInput
  }

  /**
   * Berita updateMany
   */
  export type BeritaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Beritas.
     */
    data: XOR<BeritaUpdateManyMutationInput, BeritaUncheckedUpdateManyInput>
    /**
     * Filter which Beritas to update
     */
    where?: BeritaWhereInput
    /**
     * Limit how many Beritas to update.
     */
    limit?: number
  }

  /**
   * Berita upsert
   */
  export type BeritaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * The filter to search for the Berita to update in case it exists.
     */
    where: BeritaWhereUniqueInput
    /**
     * In case the Berita found by the `where` argument doesn't exist, create a new Berita with this data.
     */
    create: XOR<BeritaCreateInput, BeritaUncheckedCreateInput>
    /**
     * In case the Berita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BeritaUpdateInput, BeritaUncheckedUpdateInput>
  }

  /**
   * Berita delete
   */
  export type BeritaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Filter which Berita to delete.
     */
    where: BeritaWhereUniqueInput
  }

  /**
   * Berita deleteMany
   */
  export type BeritaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beritas to delete
     */
    where?: BeritaWhereInput
    /**
     * Limit how many Beritas to delete.
     */
    limit?: number
  }

  /**
   * Berita without action
   */
  export type BeritaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
  }


  /**
   * Model MediaBerita
   */

  export type AggregateMediaBerita = {
    _count: MediaBeritaCountAggregateOutputType | null
    _min: MediaBeritaMinAggregateOutputType | null
    _max: MediaBeritaMaxAggregateOutputType | null
  }

  export type MediaBeritaMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    urlMedia: string | null
    keterangan: string | null
  }

  export type MediaBeritaMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    urlMedia: string | null
    keterangan: string | null
  }

  export type MediaBeritaCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    urlMedia: number
    keterangan: number
    _all: number
  }


  export type MediaBeritaMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    urlMedia?: true
    keterangan?: true
  }

  export type MediaBeritaMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    urlMedia?: true
    keterangan?: true
  }

  export type MediaBeritaCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    urlMedia?: true
    keterangan?: true
    _all?: true
  }

  export type MediaBeritaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaBerita to aggregate.
     */
    where?: MediaBeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaBeritas to fetch.
     */
    orderBy?: MediaBeritaOrderByWithRelationInput | MediaBeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaBeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaBeritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaBeritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaBeritas
    **/
    _count?: true | MediaBeritaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaBeritaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaBeritaMaxAggregateInputType
  }

  export type GetMediaBeritaAggregateType<T extends MediaBeritaAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaBerita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaBerita[P]>
      : GetScalarType<T[P], AggregateMediaBerita[P]>
  }




  export type MediaBeritaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaBeritaWhereInput
    orderBy?: MediaBeritaOrderByWithAggregationInput | MediaBeritaOrderByWithAggregationInput[]
    by: MediaBeritaScalarFieldEnum[] | MediaBeritaScalarFieldEnum
    having?: MediaBeritaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaBeritaCountAggregateInputType | true
    _min?: MediaBeritaMinAggregateInputType
    _max?: MediaBeritaMaxAggregateInputType
  }

  export type MediaBeritaGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    urlMedia: string
    keterangan: string
    _count: MediaBeritaCountAggregateOutputType | null
    _min: MediaBeritaMinAggregateOutputType | null
    _max: MediaBeritaMaxAggregateOutputType | null
  }

  type GetMediaBeritaGroupByPayload<T extends MediaBeritaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaBeritaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaBeritaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaBeritaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaBeritaGroupByOutputType[P]>
        }
      >
    >


  export type MediaBeritaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    urlMedia?: boolean
    keterangan?: boolean
  }, ExtArgs["result"]["mediaBerita"]>



  export type MediaBeritaSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    urlMedia?: boolean
    keterangan?: boolean
  }

  export type MediaBeritaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "deletedAt" | "urlMedia" | "keterangan", ExtArgs["result"]["mediaBerita"]>

  export type $MediaBeritaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaBerita"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      urlMedia: string
      keterangan: string
    }, ExtArgs["result"]["mediaBerita"]>
    composites: {}
  }

  type MediaBeritaGetPayload<S extends boolean | null | undefined | MediaBeritaDefaultArgs> = $Result.GetResult<Prisma.$MediaBeritaPayload, S>

  type MediaBeritaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaBeritaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaBeritaCountAggregateInputType | true
    }

  export interface MediaBeritaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaBerita'], meta: { name: 'MediaBerita' } }
    /**
     * Find zero or one MediaBerita that matches the filter.
     * @param {MediaBeritaFindUniqueArgs} args - Arguments to find a MediaBerita
     * @example
     * // Get one MediaBerita
     * const mediaBerita = await prisma.mediaBerita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaBeritaFindUniqueArgs>(args: SelectSubset<T, MediaBeritaFindUniqueArgs<ExtArgs>>): Prisma__MediaBeritaClient<$Result.GetResult<Prisma.$MediaBeritaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaBerita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaBeritaFindUniqueOrThrowArgs} args - Arguments to find a MediaBerita
     * @example
     * // Get one MediaBerita
     * const mediaBerita = await prisma.mediaBerita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaBeritaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaBeritaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaBeritaClient<$Result.GetResult<Prisma.$MediaBeritaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaBerita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaBeritaFindFirstArgs} args - Arguments to find a MediaBerita
     * @example
     * // Get one MediaBerita
     * const mediaBerita = await prisma.mediaBerita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaBeritaFindFirstArgs>(args?: SelectSubset<T, MediaBeritaFindFirstArgs<ExtArgs>>): Prisma__MediaBeritaClient<$Result.GetResult<Prisma.$MediaBeritaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaBerita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaBeritaFindFirstOrThrowArgs} args - Arguments to find a MediaBerita
     * @example
     * // Get one MediaBerita
     * const mediaBerita = await prisma.mediaBerita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaBeritaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaBeritaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaBeritaClient<$Result.GetResult<Prisma.$MediaBeritaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaBeritas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaBeritaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaBeritas
     * const mediaBeritas = await prisma.mediaBerita.findMany()
     * 
     * // Get first 10 MediaBeritas
     * const mediaBeritas = await prisma.mediaBerita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaBeritaWithIdOnly = await prisma.mediaBerita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaBeritaFindManyArgs>(args?: SelectSubset<T, MediaBeritaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaBeritaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaBerita.
     * @param {MediaBeritaCreateArgs} args - Arguments to create a MediaBerita.
     * @example
     * // Create one MediaBerita
     * const MediaBerita = await prisma.mediaBerita.create({
     *   data: {
     *     // ... data to create a MediaBerita
     *   }
     * })
     * 
     */
    create<T extends MediaBeritaCreateArgs>(args: SelectSubset<T, MediaBeritaCreateArgs<ExtArgs>>): Prisma__MediaBeritaClient<$Result.GetResult<Prisma.$MediaBeritaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaBeritas.
     * @param {MediaBeritaCreateManyArgs} args - Arguments to create many MediaBeritas.
     * @example
     * // Create many MediaBeritas
     * const mediaBerita = await prisma.mediaBerita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaBeritaCreateManyArgs>(args?: SelectSubset<T, MediaBeritaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MediaBerita.
     * @param {MediaBeritaDeleteArgs} args - Arguments to delete one MediaBerita.
     * @example
     * // Delete one MediaBerita
     * const MediaBerita = await prisma.mediaBerita.delete({
     *   where: {
     *     // ... filter to delete one MediaBerita
     *   }
     * })
     * 
     */
    delete<T extends MediaBeritaDeleteArgs>(args: SelectSubset<T, MediaBeritaDeleteArgs<ExtArgs>>): Prisma__MediaBeritaClient<$Result.GetResult<Prisma.$MediaBeritaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaBerita.
     * @param {MediaBeritaUpdateArgs} args - Arguments to update one MediaBerita.
     * @example
     * // Update one MediaBerita
     * const mediaBerita = await prisma.mediaBerita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaBeritaUpdateArgs>(args: SelectSubset<T, MediaBeritaUpdateArgs<ExtArgs>>): Prisma__MediaBeritaClient<$Result.GetResult<Prisma.$MediaBeritaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaBeritas.
     * @param {MediaBeritaDeleteManyArgs} args - Arguments to filter MediaBeritas to delete.
     * @example
     * // Delete a few MediaBeritas
     * const { count } = await prisma.mediaBerita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaBeritaDeleteManyArgs>(args?: SelectSubset<T, MediaBeritaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaBeritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaBeritaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaBeritas
     * const mediaBerita = await prisma.mediaBerita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaBeritaUpdateManyArgs>(args: SelectSubset<T, MediaBeritaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MediaBerita.
     * @param {MediaBeritaUpsertArgs} args - Arguments to update or create a MediaBerita.
     * @example
     * // Update or create a MediaBerita
     * const mediaBerita = await prisma.mediaBerita.upsert({
     *   create: {
     *     // ... data to create a MediaBerita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaBerita we want to update
     *   }
     * })
     */
    upsert<T extends MediaBeritaUpsertArgs>(args: SelectSubset<T, MediaBeritaUpsertArgs<ExtArgs>>): Prisma__MediaBeritaClient<$Result.GetResult<Prisma.$MediaBeritaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaBeritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaBeritaCountArgs} args - Arguments to filter MediaBeritas to count.
     * @example
     * // Count the number of MediaBeritas
     * const count = await prisma.mediaBerita.count({
     *   where: {
     *     // ... the filter for the MediaBeritas we want to count
     *   }
     * })
    **/
    count<T extends MediaBeritaCountArgs>(
      args?: Subset<T, MediaBeritaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaBeritaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaBerita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaBeritaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaBeritaAggregateArgs>(args: Subset<T, MediaBeritaAggregateArgs>): Prisma.PrismaPromise<GetMediaBeritaAggregateType<T>>

    /**
     * Group by MediaBerita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaBeritaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaBeritaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaBeritaGroupByArgs['orderBy'] }
        : { orderBy?: MediaBeritaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaBeritaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaBeritaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaBerita model
   */
  readonly fields: MediaBeritaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaBerita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaBeritaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediaBerita model
   */
  interface MediaBeritaFieldRefs {
    readonly id: FieldRef<"MediaBerita", 'String'>
    readonly createdAt: FieldRef<"MediaBerita", 'DateTime'>
    readonly updatedAt: FieldRef<"MediaBerita", 'DateTime'>
    readonly deletedAt: FieldRef<"MediaBerita", 'DateTime'>
    readonly urlMedia: FieldRef<"MediaBerita", 'String'>
    readonly keterangan: FieldRef<"MediaBerita", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MediaBerita findUnique
   */
  export type MediaBeritaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaBerita
     */
    select?: MediaBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaBerita
     */
    omit?: MediaBeritaOmit<ExtArgs> | null
    /**
     * Filter, which MediaBerita to fetch.
     */
    where: MediaBeritaWhereUniqueInput
  }

  /**
   * MediaBerita findUniqueOrThrow
   */
  export type MediaBeritaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaBerita
     */
    select?: MediaBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaBerita
     */
    omit?: MediaBeritaOmit<ExtArgs> | null
    /**
     * Filter, which MediaBerita to fetch.
     */
    where: MediaBeritaWhereUniqueInput
  }

  /**
   * MediaBerita findFirst
   */
  export type MediaBeritaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaBerita
     */
    select?: MediaBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaBerita
     */
    omit?: MediaBeritaOmit<ExtArgs> | null
    /**
     * Filter, which MediaBerita to fetch.
     */
    where?: MediaBeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaBeritas to fetch.
     */
    orderBy?: MediaBeritaOrderByWithRelationInput | MediaBeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaBeritas.
     */
    cursor?: MediaBeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaBeritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaBeritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaBeritas.
     */
    distinct?: MediaBeritaScalarFieldEnum | MediaBeritaScalarFieldEnum[]
  }

  /**
   * MediaBerita findFirstOrThrow
   */
  export type MediaBeritaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaBerita
     */
    select?: MediaBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaBerita
     */
    omit?: MediaBeritaOmit<ExtArgs> | null
    /**
     * Filter, which MediaBerita to fetch.
     */
    where?: MediaBeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaBeritas to fetch.
     */
    orderBy?: MediaBeritaOrderByWithRelationInput | MediaBeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaBeritas.
     */
    cursor?: MediaBeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaBeritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaBeritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaBeritas.
     */
    distinct?: MediaBeritaScalarFieldEnum | MediaBeritaScalarFieldEnum[]
  }

  /**
   * MediaBerita findMany
   */
  export type MediaBeritaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaBerita
     */
    select?: MediaBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaBerita
     */
    omit?: MediaBeritaOmit<ExtArgs> | null
    /**
     * Filter, which MediaBeritas to fetch.
     */
    where?: MediaBeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaBeritas to fetch.
     */
    orderBy?: MediaBeritaOrderByWithRelationInput | MediaBeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaBeritas.
     */
    cursor?: MediaBeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaBeritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaBeritas.
     */
    skip?: number
    distinct?: MediaBeritaScalarFieldEnum | MediaBeritaScalarFieldEnum[]
  }

  /**
   * MediaBerita create
   */
  export type MediaBeritaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaBerita
     */
    select?: MediaBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaBerita
     */
    omit?: MediaBeritaOmit<ExtArgs> | null
    /**
     * The data needed to create a MediaBerita.
     */
    data: XOR<MediaBeritaCreateInput, MediaBeritaUncheckedCreateInput>
  }

  /**
   * MediaBerita createMany
   */
  export type MediaBeritaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaBeritas.
     */
    data: MediaBeritaCreateManyInput | MediaBeritaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaBerita update
   */
  export type MediaBeritaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaBerita
     */
    select?: MediaBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaBerita
     */
    omit?: MediaBeritaOmit<ExtArgs> | null
    /**
     * The data needed to update a MediaBerita.
     */
    data: XOR<MediaBeritaUpdateInput, MediaBeritaUncheckedUpdateInput>
    /**
     * Choose, which MediaBerita to update.
     */
    where: MediaBeritaWhereUniqueInput
  }

  /**
   * MediaBerita updateMany
   */
  export type MediaBeritaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaBeritas.
     */
    data: XOR<MediaBeritaUpdateManyMutationInput, MediaBeritaUncheckedUpdateManyInput>
    /**
     * Filter which MediaBeritas to update
     */
    where?: MediaBeritaWhereInput
    /**
     * Limit how many MediaBeritas to update.
     */
    limit?: number
  }

  /**
   * MediaBerita upsert
   */
  export type MediaBeritaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaBerita
     */
    select?: MediaBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaBerita
     */
    omit?: MediaBeritaOmit<ExtArgs> | null
    /**
     * The filter to search for the MediaBerita to update in case it exists.
     */
    where: MediaBeritaWhereUniqueInput
    /**
     * In case the MediaBerita found by the `where` argument doesn't exist, create a new MediaBerita with this data.
     */
    create: XOR<MediaBeritaCreateInput, MediaBeritaUncheckedCreateInput>
    /**
     * In case the MediaBerita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaBeritaUpdateInput, MediaBeritaUncheckedUpdateInput>
  }

  /**
   * MediaBerita delete
   */
  export type MediaBeritaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaBerita
     */
    select?: MediaBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaBerita
     */
    omit?: MediaBeritaOmit<ExtArgs> | null
    /**
     * Filter which MediaBerita to delete.
     */
    where: MediaBeritaWhereUniqueInput
  }

  /**
   * MediaBerita deleteMany
   */
  export type MediaBeritaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaBeritas to delete
     */
    where?: MediaBeritaWhereInput
    /**
     * Limit how many MediaBeritas to delete.
     */
    limit?: number
  }

  /**
   * MediaBerita without action
   */
  export type MediaBeritaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaBerita
     */
    select?: MediaBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaBerita
     */
    omit?: MediaBeritaOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GarjasScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    lari: 'lari',
    garjasA: 'garjasA',
    pullup: 'pullup',
    shuttleRun: 'shuttleRun',
    renang: 'renang',
    situp: 'situp',
    pushup: 'pushup',
    pangkat: 'pangkat',
    skorB1: 'skorB1',
    skorB2: 'skorB2',
    skorB3: 'skorB3',
    skorB4: 'skorB4',
    garjasB: 'garjasB',
    nilaiAkhir: 'nilaiAkhir',
    penilaiId: 'penilaiId',
    prajuritId: 'prajuritId'
  };

  export type GarjasScalarFieldEnum = (typeof GarjasScalarFieldEnum)[keyof typeof GarjasScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    name: 'name',
    username: 'username',
    password: 'password',
    avatar: 'avatar',
    lastLogin: 'lastLogin',
    role: 'role',
    kesatuanId: 'kesatuanId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KesatuanScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    motto: 'motto',
    logo: 'logo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KesatuanScalarFieldEnum = (typeof KesatuanScalarFieldEnum)[keyof typeof KesatuanScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    umur: 'umur',
    jenisKelamin: 'jenisKelamin',
    golongan: 'golongan',
    userId: 'userId',
    pangkat: 'pangkat',
    beratBadan: 'beratBadan',
    tinggiBadan: 'tinggiBadan'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    revoked: 'revoked'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const BeritaScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    judul: 'judul',
    deskripsi: 'deskripsi',
    thumbnail: 'thumbnail',
    penulis: 'penulis',
    content: 'content',
    like: 'like',
    dislike: 'dislike'
  };

  export type BeritaScalarFieldEnum = (typeof BeritaScalarFieldEnum)[keyof typeof BeritaScalarFieldEnum]


  export const MediaBeritaScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    urlMedia: 'urlMedia',
    keterangan: 'keterangan'
  };

  export type MediaBeritaScalarFieldEnum = (typeof MediaBeritaScalarFieldEnum)[keyof typeof MediaBeritaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const GarjasOrderByRelevanceFieldEnum: {
    pangkat: 'pangkat',
    penilaiId: 'penilaiId',
    prajuritId: 'prajuritId'
  };

  export type GarjasOrderByRelevanceFieldEnum = (typeof GarjasOrderByRelevanceFieldEnum)[keyof typeof GarjasOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    avatar: 'avatar',
    kesatuanId: 'kesatuanId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const KesatuanOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    motto: 'motto',
    logo: 'logo'
  };

  export type KesatuanOrderByRelevanceFieldEnum = (typeof KesatuanOrderByRelevanceFieldEnum)[keyof typeof KesatuanOrderByRelevanceFieldEnum]


  export const ProfileOrderByRelevanceFieldEnum: {
    jenisKelamin: 'jenisKelamin',
    userId: 'userId',
    pangkat: 'pangkat'
  };

  export type ProfileOrderByRelevanceFieldEnum = (typeof ProfileOrderByRelevanceFieldEnum)[keyof typeof ProfileOrderByRelevanceFieldEnum]


  export const RefreshTokenOrderByRelevanceFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId'
  };

  export type RefreshTokenOrderByRelevanceFieldEnum = (typeof RefreshTokenOrderByRelevanceFieldEnum)[keyof typeof RefreshTokenOrderByRelevanceFieldEnum]


  export const BeritaOrderByRelevanceFieldEnum: {
    id: 'id',
    judul: 'judul',
    deskripsi: 'deskripsi',
    thumbnail: 'thumbnail',
    penulis: 'penulis',
    content: 'content'
  };

  export type BeritaOrderByRelevanceFieldEnum = (typeof BeritaOrderByRelevanceFieldEnum)[keyof typeof BeritaOrderByRelevanceFieldEnum]


  export const MediaBeritaOrderByRelevanceFieldEnum: {
    id: 'id',
    urlMedia: 'urlMedia',
    keterangan: 'keterangan'
  };

  export type MediaBeritaOrderByRelevanceFieldEnum = (typeof MediaBeritaOrderByRelevanceFieldEnum)[keyof typeof MediaBeritaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type GarjasWhereInput = {
    AND?: GarjasWhereInput | GarjasWhereInput[]
    OR?: GarjasWhereInput[]
    NOT?: GarjasWhereInput | GarjasWhereInput[]
    id?: IntFilter<"Garjas"> | number
    tanggal?: DateTimeFilter<"Garjas"> | Date | string
    lari?: IntFilter<"Garjas"> | number
    garjasA?: FloatFilter<"Garjas"> | number
    pullup?: IntNullableFilter<"Garjas"> | number | null
    shuttleRun?: FloatFilter<"Garjas"> | number
    renang?: IntNullableFilter<"Garjas"> | number | null
    situp?: IntNullableFilter<"Garjas"> | number | null
    pushup?: IntNullableFilter<"Garjas"> | number | null
    pangkat?: StringFilter<"Garjas"> | string
    skorB1?: FloatFilter<"Garjas"> | number
    skorB2?: FloatFilter<"Garjas"> | number
    skorB3?: FloatFilter<"Garjas"> | number
    skorB4?: FloatFilter<"Garjas"> | number
    garjasB?: FloatFilter<"Garjas"> | number
    nilaiAkhir?: FloatFilter<"Garjas"> | number
    penilaiId?: StringFilter<"Garjas"> | string
    prajuritId?: StringFilter<"Garjas"> | string
    penilai?: XOR<UserScalarRelationFilter, UserWhereInput>
    prajurit?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GarjasOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    lari?: SortOrder
    garjasA?: SortOrder
    pullup?: SortOrderInput | SortOrder
    shuttleRun?: SortOrder
    renang?: SortOrderInput | SortOrder
    situp?: SortOrderInput | SortOrder
    pushup?: SortOrderInput | SortOrder
    pangkat?: SortOrder
    skorB1?: SortOrder
    skorB2?: SortOrder
    skorB3?: SortOrder
    skorB4?: SortOrder
    garjasB?: SortOrder
    nilaiAkhir?: SortOrder
    penilaiId?: SortOrder
    prajuritId?: SortOrder
    penilai?: UserOrderByWithRelationInput
    prajurit?: UserOrderByWithRelationInput
    _relevance?: GarjasOrderByRelevanceInput
  }

  export type GarjasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GarjasWhereInput | GarjasWhereInput[]
    OR?: GarjasWhereInput[]
    NOT?: GarjasWhereInput | GarjasWhereInput[]
    tanggal?: DateTimeFilter<"Garjas"> | Date | string
    lari?: IntFilter<"Garjas"> | number
    garjasA?: FloatFilter<"Garjas"> | number
    pullup?: IntNullableFilter<"Garjas"> | number | null
    shuttleRun?: FloatFilter<"Garjas"> | number
    renang?: IntNullableFilter<"Garjas"> | number | null
    situp?: IntNullableFilter<"Garjas"> | number | null
    pushup?: IntNullableFilter<"Garjas"> | number | null
    pangkat?: StringFilter<"Garjas"> | string
    skorB1?: FloatFilter<"Garjas"> | number
    skorB2?: FloatFilter<"Garjas"> | number
    skorB3?: FloatFilter<"Garjas"> | number
    skorB4?: FloatFilter<"Garjas"> | number
    garjasB?: FloatFilter<"Garjas"> | number
    nilaiAkhir?: FloatFilter<"Garjas"> | number
    penilaiId?: StringFilter<"Garjas"> | string
    prajuritId?: StringFilter<"Garjas"> | string
    penilai?: XOR<UserScalarRelationFilter, UserWhereInput>
    prajurit?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GarjasOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    lari?: SortOrder
    garjasA?: SortOrder
    pullup?: SortOrderInput | SortOrder
    shuttleRun?: SortOrder
    renang?: SortOrderInput | SortOrder
    situp?: SortOrderInput | SortOrder
    pushup?: SortOrderInput | SortOrder
    pangkat?: SortOrder
    skorB1?: SortOrder
    skorB2?: SortOrder
    skorB3?: SortOrder
    skorB4?: SortOrder
    garjasB?: SortOrder
    nilaiAkhir?: SortOrder
    penilaiId?: SortOrder
    prajuritId?: SortOrder
    _count?: GarjasCountOrderByAggregateInput
    _avg?: GarjasAvgOrderByAggregateInput
    _max?: GarjasMaxOrderByAggregateInput
    _min?: GarjasMinOrderByAggregateInput
    _sum?: GarjasSumOrderByAggregateInput
  }

  export type GarjasScalarWhereWithAggregatesInput = {
    AND?: GarjasScalarWhereWithAggregatesInput | GarjasScalarWhereWithAggregatesInput[]
    OR?: GarjasScalarWhereWithAggregatesInput[]
    NOT?: GarjasScalarWhereWithAggregatesInput | GarjasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Garjas"> | number
    tanggal?: DateTimeWithAggregatesFilter<"Garjas"> | Date | string
    lari?: IntWithAggregatesFilter<"Garjas"> | number
    garjasA?: FloatWithAggregatesFilter<"Garjas"> | number
    pullup?: IntNullableWithAggregatesFilter<"Garjas"> | number | null
    shuttleRun?: FloatWithAggregatesFilter<"Garjas"> | number
    renang?: IntNullableWithAggregatesFilter<"Garjas"> | number | null
    situp?: IntNullableWithAggregatesFilter<"Garjas"> | number | null
    pushup?: IntNullableWithAggregatesFilter<"Garjas"> | number | null
    pangkat?: StringWithAggregatesFilter<"Garjas"> | string
    skorB1?: FloatWithAggregatesFilter<"Garjas"> | number
    skorB2?: FloatWithAggregatesFilter<"Garjas"> | number
    skorB3?: FloatWithAggregatesFilter<"Garjas"> | number
    skorB4?: FloatWithAggregatesFilter<"Garjas"> | number
    garjasB?: FloatWithAggregatesFilter<"Garjas"> | number
    nilaiAkhir?: FloatWithAggregatesFilter<"Garjas"> | number
    penilaiId?: StringWithAggregatesFilter<"Garjas"> | string
    prajuritId?: StringWithAggregatesFilter<"Garjas"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    kesatuanId?: StringNullableFilter<"User"> | string | null
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    penilaianGarjasDibuat?: GarjasListRelationFilter
    penilaianGarjasDidapatkan?: GarjasListRelationFilter
    kesatuan?: XOR<KesatuanNullableScalarRelationFilter, KesatuanWhereInput> | null
    RefreshToken?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    role?: SortOrder
    kesatuanId?: SortOrderInput | SortOrder
    profile?: ProfileOrderByWithRelationInput
    penilaianGarjasDibuat?: GarjasOrderByRelationAggregateInput
    penilaianGarjasDidapatkan?: GarjasOrderByRelationAggregateInput
    kesatuan?: KesatuanOrderByWithRelationInput
    RefreshToken?: RefreshTokenOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    kesatuanId?: StringNullableFilter<"User"> | string | null
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    penilaianGarjasDibuat?: GarjasListRelationFilter
    penilaianGarjasDidapatkan?: GarjasListRelationFilter
    kesatuan?: XOR<KesatuanNullableScalarRelationFilter, KesatuanWhereInput> | null
    RefreshToken?: RefreshTokenListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    role?: SortOrder
    kesatuanId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    kesatuanId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type KesatuanWhereInput = {
    AND?: KesatuanWhereInput | KesatuanWhereInput[]
    OR?: KesatuanWhereInput[]
    NOT?: KesatuanWhereInput | KesatuanWhereInput[]
    id?: StringFilter<"Kesatuan"> | string
    nama?: StringFilter<"Kesatuan"> | string
    motto?: StringNullableFilter<"Kesatuan"> | string | null
    logo?: StringNullableFilter<"Kesatuan"> | string | null
    createdAt?: DateTimeFilter<"Kesatuan"> | Date | string
    updatedAt?: DateTimeFilter<"Kesatuan"> | Date | string
    users?: UserListRelationFilter
  }

  export type KesatuanOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    motto?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    _relevance?: KesatuanOrderByRelevanceInput
  }

  export type KesatuanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama?: string
    AND?: KesatuanWhereInput | KesatuanWhereInput[]
    OR?: KesatuanWhereInput[]
    NOT?: KesatuanWhereInput | KesatuanWhereInput[]
    motto?: StringNullableFilter<"Kesatuan"> | string | null
    logo?: StringNullableFilter<"Kesatuan"> | string | null
    createdAt?: DateTimeFilter<"Kesatuan"> | Date | string
    updatedAt?: DateTimeFilter<"Kesatuan"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "nama">

  export type KesatuanOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    motto?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KesatuanCountOrderByAggregateInput
    _max?: KesatuanMaxOrderByAggregateInput
    _min?: KesatuanMinOrderByAggregateInput
  }

  export type KesatuanScalarWhereWithAggregatesInput = {
    AND?: KesatuanScalarWhereWithAggregatesInput | KesatuanScalarWhereWithAggregatesInput[]
    OR?: KesatuanScalarWhereWithAggregatesInput[]
    NOT?: KesatuanScalarWhereWithAggregatesInput | KesatuanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Kesatuan"> | string
    nama?: StringWithAggregatesFilter<"Kesatuan"> | string
    motto?: StringNullableWithAggregatesFilter<"Kesatuan"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Kesatuan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Kesatuan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kesatuan"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    umur?: IntFilter<"Profile"> | number
    jenisKelamin?: StringFilter<"Profile"> | string
    golongan?: IntFilter<"Profile"> | number
    userId?: StringFilter<"Profile"> | string
    pangkat?: StringFilter<"Profile"> | string
    beratBadan?: IntNullableFilter<"Profile"> | number | null
    tinggiBadan?: IntNullableFilter<"Profile"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    umur?: SortOrder
    jenisKelamin?: SortOrder
    golongan?: SortOrder
    userId?: SortOrder
    pangkat?: SortOrder
    beratBadan?: SortOrderInput | SortOrder
    tinggiBadan?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: ProfileOrderByRelevanceInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    umur?: IntFilter<"Profile"> | number
    jenisKelamin?: StringFilter<"Profile"> | string
    golongan?: IntFilter<"Profile"> | number
    pangkat?: StringFilter<"Profile"> | string
    beratBadan?: IntNullableFilter<"Profile"> | number | null
    tinggiBadan?: IntNullableFilter<"Profile"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    umur?: SortOrder
    jenisKelamin?: SortOrder
    golongan?: SortOrder
    userId?: SortOrder
    pangkat?: SortOrder
    beratBadan?: SortOrderInput | SortOrder
    tinggiBadan?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    umur?: IntWithAggregatesFilter<"Profile"> | number
    jenisKelamin?: StringWithAggregatesFilter<"Profile"> | string
    golongan?: IntWithAggregatesFilter<"Profile"> | number
    userId?: StringWithAggregatesFilter<"Profile"> | string
    pangkat?: StringWithAggregatesFilter<"Profile"> | string
    beratBadan?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    tinggiBadan?: IntNullableWithAggregatesFilter<"Profile"> | number | null
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revoked?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: RefreshTokenOrderByRelevanceInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revoked?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revoked?: BoolWithAggregatesFilter<"RefreshToken"> | boolean
  }

  export type BeritaWhereInput = {
    AND?: BeritaWhereInput | BeritaWhereInput[]
    OR?: BeritaWhereInput[]
    NOT?: BeritaWhereInput | BeritaWhereInput[]
    id?: StringFilter<"Berita"> | string
    createdAt?: DateTimeFilter<"Berita"> | Date | string
    updatedAt?: DateTimeFilter<"Berita"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Berita"> | Date | string | null
    judul?: StringFilter<"Berita"> | string
    deskripsi?: StringNullableFilter<"Berita"> | string | null
    thumbnail?: StringFilter<"Berita"> | string
    penulis?: StringFilter<"Berita"> | string
    content?: StringFilter<"Berita"> | string
    like?: IntFilter<"Berita"> | number
    dislike?: IntFilter<"Berita"> | number
  }

  export type BeritaOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    judul?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    thumbnail?: SortOrder
    penulis?: SortOrder
    content?: SortOrder
    like?: SortOrder
    dislike?: SortOrder
    _relevance?: BeritaOrderByRelevanceInput
  }

  export type BeritaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BeritaWhereInput | BeritaWhereInput[]
    OR?: BeritaWhereInput[]
    NOT?: BeritaWhereInput | BeritaWhereInput[]
    createdAt?: DateTimeFilter<"Berita"> | Date | string
    updatedAt?: DateTimeFilter<"Berita"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Berita"> | Date | string | null
    judul?: StringFilter<"Berita"> | string
    deskripsi?: StringNullableFilter<"Berita"> | string | null
    thumbnail?: StringFilter<"Berita"> | string
    penulis?: StringFilter<"Berita"> | string
    content?: StringFilter<"Berita"> | string
    like?: IntFilter<"Berita"> | number
    dislike?: IntFilter<"Berita"> | number
  }, "id">

  export type BeritaOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    judul?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    thumbnail?: SortOrder
    penulis?: SortOrder
    content?: SortOrder
    like?: SortOrder
    dislike?: SortOrder
    _count?: BeritaCountOrderByAggregateInput
    _avg?: BeritaAvgOrderByAggregateInput
    _max?: BeritaMaxOrderByAggregateInput
    _min?: BeritaMinOrderByAggregateInput
    _sum?: BeritaSumOrderByAggregateInput
  }

  export type BeritaScalarWhereWithAggregatesInput = {
    AND?: BeritaScalarWhereWithAggregatesInput | BeritaScalarWhereWithAggregatesInput[]
    OR?: BeritaScalarWhereWithAggregatesInput[]
    NOT?: BeritaScalarWhereWithAggregatesInput | BeritaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Berita"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Berita"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Berita"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Berita"> | Date | string | null
    judul?: StringWithAggregatesFilter<"Berita"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"Berita"> | string | null
    thumbnail?: StringWithAggregatesFilter<"Berita"> | string
    penulis?: StringWithAggregatesFilter<"Berita"> | string
    content?: StringWithAggregatesFilter<"Berita"> | string
    like?: IntWithAggregatesFilter<"Berita"> | number
    dislike?: IntWithAggregatesFilter<"Berita"> | number
  }

  export type MediaBeritaWhereInput = {
    AND?: MediaBeritaWhereInput | MediaBeritaWhereInput[]
    OR?: MediaBeritaWhereInput[]
    NOT?: MediaBeritaWhereInput | MediaBeritaWhereInput[]
    id?: StringFilter<"MediaBerita"> | string
    createdAt?: DateTimeFilter<"MediaBerita"> | Date | string
    updatedAt?: DateTimeFilter<"MediaBerita"> | Date | string
    deletedAt?: DateTimeNullableFilter<"MediaBerita"> | Date | string | null
    urlMedia?: StringFilter<"MediaBerita"> | string
    keterangan?: StringFilter<"MediaBerita"> | string
  }

  export type MediaBeritaOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    urlMedia?: SortOrder
    keterangan?: SortOrder
    _relevance?: MediaBeritaOrderByRelevanceInput
  }

  export type MediaBeritaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaBeritaWhereInput | MediaBeritaWhereInput[]
    OR?: MediaBeritaWhereInput[]
    NOT?: MediaBeritaWhereInput | MediaBeritaWhereInput[]
    createdAt?: DateTimeFilter<"MediaBerita"> | Date | string
    updatedAt?: DateTimeFilter<"MediaBerita"> | Date | string
    deletedAt?: DateTimeNullableFilter<"MediaBerita"> | Date | string | null
    urlMedia?: StringFilter<"MediaBerita"> | string
    keterangan?: StringFilter<"MediaBerita"> | string
  }, "id">

  export type MediaBeritaOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    urlMedia?: SortOrder
    keterangan?: SortOrder
    _count?: MediaBeritaCountOrderByAggregateInput
    _max?: MediaBeritaMaxOrderByAggregateInput
    _min?: MediaBeritaMinOrderByAggregateInput
  }

  export type MediaBeritaScalarWhereWithAggregatesInput = {
    AND?: MediaBeritaScalarWhereWithAggregatesInput | MediaBeritaScalarWhereWithAggregatesInput[]
    OR?: MediaBeritaScalarWhereWithAggregatesInput[]
    NOT?: MediaBeritaScalarWhereWithAggregatesInput | MediaBeritaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaBerita"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MediaBerita"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MediaBerita"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"MediaBerita"> | Date | string | null
    urlMedia?: StringWithAggregatesFilter<"MediaBerita"> | string
    keterangan?: StringWithAggregatesFilter<"MediaBerita"> | string
  }

  export type GarjasCreateInput = {
    tanggal?: Date | string
    lari: number
    garjasA: number
    pullup?: number | null
    shuttleRun: number
    renang?: number | null
    situp?: number | null
    pushup?: number | null
    pangkat: string
    skorB1: number
    skorB2: number
    skorB3: number
    skorB4: number
    garjasB: number
    nilaiAkhir: number
    penilai: UserCreateNestedOneWithoutPenilaianGarjasDibuatInput
    prajurit: UserCreateNestedOneWithoutPenilaianGarjasDidapatkanInput
  }

  export type GarjasUncheckedCreateInput = {
    id?: number
    tanggal?: Date | string
    lari: number
    garjasA: number
    pullup?: number | null
    shuttleRun: number
    renang?: number | null
    situp?: number | null
    pushup?: number | null
    pangkat: string
    skorB1: number
    skorB2: number
    skorB3: number
    skorB4: number
    garjasB: number
    nilaiAkhir: number
    penilaiId: string
    prajuritId: string
  }

  export type GarjasUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lari?: IntFieldUpdateOperationsInput | number
    garjasA?: FloatFieldUpdateOperationsInput | number
    pullup?: NullableIntFieldUpdateOperationsInput | number | null
    shuttleRun?: FloatFieldUpdateOperationsInput | number
    renang?: NullableIntFieldUpdateOperationsInput | number | null
    situp?: NullableIntFieldUpdateOperationsInput | number | null
    pushup?: NullableIntFieldUpdateOperationsInput | number | null
    pangkat?: StringFieldUpdateOperationsInput | string
    skorB1?: FloatFieldUpdateOperationsInput | number
    skorB2?: FloatFieldUpdateOperationsInput | number
    skorB3?: FloatFieldUpdateOperationsInput | number
    skorB4?: FloatFieldUpdateOperationsInput | number
    garjasB?: FloatFieldUpdateOperationsInput | number
    nilaiAkhir?: FloatFieldUpdateOperationsInput | number
    penilai?: UserUpdateOneRequiredWithoutPenilaianGarjasDibuatNestedInput
    prajurit?: UserUpdateOneRequiredWithoutPenilaianGarjasDidapatkanNestedInput
  }

  export type GarjasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lari?: IntFieldUpdateOperationsInput | number
    garjasA?: FloatFieldUpdateOperationsInput | number
    pullup?: NullableIntFieldUpdateOperationsInput | number | null
    shuttleRun?: FloatFieldUpdateOperationsInput | number
    renang?: NullableIntFieldUpdateOperationsInput | number | null
    situp?: NullableIntFieldUpdateOperationsInput | number | null
    pushup?: NullableIntFieldUpdateOperationsInput | number | null
    pangkat?: StringFieldUpdateOperationsInput | string
    skorB1?: FloatFieldUpdateOperationsInput | number
    skorB2?: FloatFieldUpdateOperationsInput | number
    skorB3?: FloatFieldUpdateOperationsInput | number
    skorB4?: FloatFieldUpdateOperationsInput | number
    garjasB?: FloatFieldUpdateOperationsInput | number
    nilaiAkhir?: FloatFieldUpdateOperationsInput | number
    penilaiId?: StringFieldUpdateOperationsInput | string
    prajuritId?: StringFieldUpdateOperationsInput | string
  }

  export type GarjasCreateManyInput = {
    id?: number
    tanggal?: Date | string
    lari: number
    garjasA: number
    pullup?: number | null
    shuttleRun: number
    renang?: number | null
    situp?: number | null
    pushup?: number | null
    pangkat: string
    skorB1: number
    skorB2: number
    skorB3: number
    skorB4: number
    garjasB: number
    nilaiAkhir: number
    penilaiId: string
    prajuritId: string
  }

  export type GarjasUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lari?: IntFieldUpdateOperationsInput | number
    garjasA?: FloatFieldUpdateOperationsInput | number
    pullup?: NullableIntFieldUpdateOperationsInput | number | null
    shuttleRun?: FloatFieldUpdateOperationsInput | number
    renang?: NullableIntFieldUpdateOperationsInput | number | null
    situp?: NullableIntFieldUpdateOperationsInput | number | null
    pushup?: NullableIntFieldUpdateOperationsInput | number | null
    pangkat?: StringFieldUpdateOperationsInput | string
    skorB1?: FloatFieldUpdateOperationsInput | number
    skorB2?: FloatFieldUpdateOperationsInput | number
    skorB3?: FloatFieldUpdateOperationsInput | number
    skorB4?: FloatFieldUpdateOperationsInput | number
    garjasB?: FloatFieldUpdateOperationsInput | number
    nilaiAkhir?: FloatFieldUpdateOperationsInput | number
  }

  export type GarjasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lari?: IntFieldUpdateOperationsInput | number
    garjasA?: FloatFieldUpdateOperationsInput | number
    pullup?: NullableIntFieldUpdateOperationsInput | number | null
    shuttleRun?: FloatFieldUpdateOperationsInput | number
    renang?: NullableIntFieldUpdateOperationsInput | number | null
    situp?: NullableIntFieldUpdateOperationsInput | number | null
    pushup?: NullableIntFieldUpdateOperationsInput | number | null
    pangkat?: StringFieldUpdateOperationsInput | string
    skorB1?: FloatFieldUpdateOperationsInput | number
    skorB2?: FloatFieldUpdateOperationsInput | number
    skorB3?: FloatFieldUpdateOperationsInput | number
    skorB4?: FloatFieldUpdateOperationsInput | number
    garjasB?: FloatFieldUpdateOperationsInput | number
    nilaiAkhir?: FloatFieldUpdateOperationsInput | number
    penilaiId?: StringFieldUpdateOperationsInput | string
    prajuritId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    username: string
    password: string
    avatar?: string | null
    lastLogin?: Date | string | null
    role: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    penilaianGarjasDibuat?: GarjasCreateNestedManyWithoutPenilaiInput
    penilaianGarjasDidapatkan?: GarjasCreateNestedManyWithoutPrajuritInput
    kesatuan?: KesatuanCreateNestedOneWithoutUsersInput
    RefreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    username: string
    password: string
    avatar?: string | null
    lastLogin?: Date | string | null
    role: $Enums.Role
    kesatuanId?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    penilaianGarjasDibuat?: GarjasUncheckedCreateNestedManyWithoutPenilaiInput
    penilaianGarjasDidapatkan?: GarjasUncheckedCreateNestedManyWithoutPrajuritInput
    RefreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    penilaianGarjasDibuat?: GarjasUpdateManyWithoutPenilaiNestedInput
    penilaianGarjasDidapatkan?: GarjasUpdateManyWithoutPrajuritNestedInput
    kesatuan?: KesatuanUpdateOneWithoutUsersNestedInput
    RefreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kesatuanId?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    penilaianGarjasDibuat?: GarjasUncheckedUpdateManyWithoutPenilaiNestedInput
    penilaianGarjasDidapatkan?: GarjasUncheckedUpdateManyWithoutPrajuritNestedInput
    RefreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    username: string
    password: string
    avatar?: string | null
    lastLogin?: Date | string | null
    role: $Enums.Role
    kesatuanId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kesatuanId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KesatuanCreateInput = {
    id?: string
    nama: string
    motto?: string | null
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutKesatuanInput
  }

  export type KesatuanUncheckedCreateInput = {
    id?: string
    nama: string
    motto?: string | null
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutKesatuanInput
  }

  export type KesatuanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutKesatuanNestedInput
  }

  export type KesatuanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutKesatuanNestedInput
  }

  export type KesatuanCreateManyInput = {
    id?: string
    nama: string
    motto?: string | null
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KesatuanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KesatuanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    umur: number
    jenisKelamin: string
    golongan: number
    pangkat: string
    beratBadan?: number | null
    tinggiBadan?: number | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    umur: number
    jenisKelamin: string
    golongan: number
    userId: string
    pangkat: string
    beratBadan?: number | null
    tinggiBadan?: number | null
  }

  export type ProfileUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    umur?: IntFieldUpdateOperationsInput | number
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    golongan?: IntFieldUpdateOperationsInput | number
    pangkat?: StringFieldUpdateOperationsInput | string
    beratBadan?: NullableIntFieldUpdateOperationsInput | number | null
    tinggiBadan?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    umur?: IntFieldUpdateOperationsInput | number
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    golongan?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    pangkat?: StringFieldUpdateOperationsInput | string
    beratBadan?: NullableIntFieldUpdateOperationsInput | number | null
    tinggiBadan?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProfileCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    umur: number
    jenisKelamin: string
    golongan: number
    userId: string
    pangkat: string
    beratBadan?: number | null
    tinggiBadan?: number | null
  }

  export type ProfileUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    umur?: IntFieldUpdateOperationsInput | number
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    golongan?: IntFieldUpdateOperationsInput | number
    pangkat?: StringFieldUpdateOperationsInput | string
    beratBadan?: NullableIntFieldUpdateOperationsInput | number | null
    tinggiBadan?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    umur?: IntFieldUpdateOperationsInput | number
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    golongan?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    pangkat?: StringFieldUpdateOperationsInput | string
    beratBadan?: NullableIntFieldUpdateOperationsInput | number | null
    tinggiBadan?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    revoked?: boolean
    user: UserCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    revoked?: boolean
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRefreshTokenNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    revoked?: boolean
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BeritaCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    judul: string
    deskripsi?: string | null
    thumbnail: string
    penulis: string
    content: string
    like?: number
    dislike?: number
  }

  export type BeritaUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    judul: string
    deskripsi?: string | null
    thumbnail: string
    penulis: string
    content: string
    like?: number
    dislike?: number
  }

  export type BeritaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    penulis?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like?: IntFieldUpdateOperationsInput | number
    dislike?: IntFieldUpdateOperationsInput | number
  }

  export type BeritaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    penulis?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like?: IntFieldUpdateOperationsInput | number
    dislike?: IntFieldUpdateOperationsInput | number
  }

  export type BeritaCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    judul: string
    deskripsi?: string | null
    thumbnail: string
    penulis: string
    content: string
    like?: number
    dislike?: number
  }

  export type BeritaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    penulis?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like?: IntFieldUpdateOperationsInput | number
    dislike?: IntFieldUpdateOperationsInput | number
  }

  export type BeritaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    penulis?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like?: IntFieldUpdateOperationsInput | number
    dislike?: IntFieldUpdateOperationsInput | number
  }

  export type MediaBeritaCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    urlMedia: string
    keterangan: string
  }

  export type MediaBeritaUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    urlMedia: string
    keterangan: string
  }

  export type MediaBeritaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlMedia?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
  }

  export type MediaBeritaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlMedia?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
  }

  export type MediaBeritaCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    urlMedia: string
    keterangan: string
  }

  export type MediaBeritaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlMedia?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
  }

  export type MediaBeritaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlMedia?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GarjasOrderByRelevanceInput = {
    fields: GarjasOrderByRelevanceFieldEnum | GarjasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GarjasCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    lari?: SortOrder
    garjasA?: SortOrder
    pullup?: SortOrder
    shuttleRun?: SortOrder
    renang?: SortOrder
    situp?: SortOrder
    pushup?: SortOrder
    pangkat?: SortOrder
    skorB1?: SortOrder
    skorB2?: SortOrder
    skorB3?: SortOrder
    skorB4?: SortOrder
    garjasB?: SortOrder
    nilaiAkhir?: SortOrder
    penilaiId?: SortOrder
    prajuritId?: SortOrder
  }

  export type GarjasAvgOrderByAggregateInput = {
    id?: SortOrder
    lari?: SortOrder
    garjasA?: SortOrder
    pullup?: SortOrder
    shuttleRun?: SortOrder
    renang?: SortOrder
    situp?: SortOrder
    pushup?: SortOrder
    skorB1?: SortOrder
    skorB2?: SortOrder
    skorB3?: SortOrder
    skorB4?: SortOrder
    garjasB?: SortOrder
    nilaiAkhir?: SortOrder
  }

  export type GarjasMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    lari?: SortOrder
    garjasA?: SortOrder
    pullup?: SortOrder
    shuttleRun?: SortOrder
    renang?: SortOrder
    situp?: SortOrder
    pushup?: SortOrder
    pangkat?: SortOrder
    skorB1?: SortOrder
    skorB2?: SortOrder
    skorB3?: SortOrder
    skorB4?: SortOrder
    garjasB?: SortOrder
    nilaiAkhir?: SortOrder
    penilaiId?: SortOrder
    prajuritId?: SortOrder
  }

  export type GarjasMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    lari?: SortOrder
    garjasA?: SortOrder
    pullup?: SortOrder
    shuttleRun?: SortOrder
    renang?: SortOrder
    situp?: SortOrder
    pushup?: SortOrder
    pangkat?: SortOrder
    skorB1?: SortOrder
    skorB2?: SortOrder
    skorB3?: SortOrder
    skorB4?: SortOrder
    garjasB?: SortOrder
    nilaiAkhir?: SortOrder
    penilaiId?: SortOrder
    prajuritId?: SortOrder
  }

  export type GarjasSumOrderByAggregateInput = {
    id?: SortOrder
    lari?: SortOrder
    garjasA?: SortOrder
    pullup?: SortOrder
    shuttleRun?: SortOrder
    renang?: SortOrder
    situp?: SortOrder
    pushup?: SortOrder
    skorB1?: SortOrder
    skorB2?: SortOrder
    skorB3?: SortOrder
    skorB4?: SortOrder
    garjasB?: SortOrder
    nilaiAkhir?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type GarjasListRelationFilter = {
    every?: GarjasWhereInput
    some?: GarjasWhereInput
    none?: GarjasWhereInput
  }

  export type KesatuanNullableScalarRelationFilter = {
    is?: KesatuanWhereInput | null
    isNot?: KesatuanWhereInput | null
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type GarjasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
    kesatuanId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
    kesatuanId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
    kesatuanId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KesatuanOrderByRelevanceInput = {
    fields: KesatuanOrderByRelevanceFieldEnum | KesatuanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KesatuanCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    motto?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KesatuanMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    motto?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KesatuanMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    motto?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileOrderByRelevanceInput = {
    fields: ProfileOrderByRelevanceFieldEnum | ProfileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    umur?: SortOrder
    jenisKelamin?: SortOrder
    golongan?: SortOrder
    userId?: SortOrder
    pangkat?: SortOrder
    beratBadan?: SortOrder
    tinggiBadan?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    umur?: SortOrder
    golongan?: SortOrder
    beratBadan?: SortOrder
    tinggiBadan?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    umur?: SortOrder
    jenisKelamin?: SortOrder
    golongan?: SortOrder
    userId?: SortOrder
    pangkat?: SortOrder
    beratBadan?: SortOrder
    tinggiBadan?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    umur?: SortOrder
    jenisKelamin?: SortOrder
    golongan?: SortOrder
    userId?: SortOrder
    pangkat?: SortOrder
    beratBadan?: SortOrder
    tinggiBadan?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    umur?: SortOrder
    golongan?: SortOrder
    beratBadan?: SortOrder
    tinggiBadan?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RefreshTokenOrderByRelevanceInput = {
    fields: RefreshTokenOrderByRelevanceFieldEnum | RefreshTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revoked?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revoked?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revoked?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BeritaOrderByRelevanceInput = {
    fields: BeritaOrderByRelevanceFieldEnum | BeritaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BeritaCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    thumbnail?: SortOrder
    penulis?: SortOrder
    content?: SortOrder
    like?: SortOrder
    dislike?: SortOrder
  }

  export type BeritaAvgOrderByAggregateInput = {
    like?: SortOrder
    dislike?: SortOrder
  }

  export type BeritaMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    thumbnail?: SortOrder
    penulis?: SortOrder
    content?: SortOrder
    like?: SortOrder
    dislike?: SortOrder
  }

  export type BeritaMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    thumbnail?: SortOrder
    penulis?: SortOrder
    content?: SortOrder
    like?: SortOrder
    dislike?: SortOrder
  }

  export type BeritaSumOrderByAggregateInput = {
    like?: SortOrder
    dislike?: SortOrder
  }

  export type MediaBeritaOrderByRelevanceInput = {
    fields: MediaBeritaOrderByRelevanceFieldEnum | MediaBeritaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MediaBeritaCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    urlMedia?: SortOrder
    keterangan?: SortOrder
  }

  export type MediaBeritaMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    urlMedia?: SortOrder
    keterangan?: SortOrder
  }

  export type MediaBeritaMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    urlMedia?: SortOrder
    keterangan?: SortOrder
  }

  export type UserCreateNestedOneWithoutPenilaianGarjasDibuatInput = {
    create?: XOR<UserCreateWithoutPenilaianGarjasDibuatInput, UserUncheckedCreateWithoutPenilaianGarjasDibuatInput>
    connectOrCreate?: UserCreateOrConnectWithoutPenilaianGarjasDibuatInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPenilaianGarjasDidapatkanInput = {
    create?: XOR<UserCreateWithoutPenilaianGarjasDidapatkanInput, UserUncheckedCreateWithoutPenilaianGarjasDidapatkanInput>
    connectOrCreate?: UserCreateOrConnectWithoutPenilaianGarjasDidapatkanInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateOneRequiredWithoutPenilaianGarjasDibuatNestedInput = {
    create?: XOR<UserCreateWithoutPenilaianGarjasDibuatInput, UserUncheckedCreateWithoutPenilaianGarjasDibuatInput>
    connectOrCreate?: UserCreateOrConnectWithoutPenilaianGarjasDibuatInput
    upsert?: UserUpsertWithoutPenilaianGarjasDibuatInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPenilaianGarjasDibuatInput, UserUpdateWithoutPenilaianGarjasDibuatInput>, UserUncheckedUpdateWithoutPenilaianGarjasDibuatInput>
  }

  export type UserUpdateOneRequiredWithoutPenilaianGarjasDidapatkanNestedInput = {
    create?: XOR<UserCreateWithoutPenilaianGarjasDidapatkanInput, UserUncheckedCreateWithoutPenilaianGarjasDidapatkanInput>
    connectOrCreate?: UserCreateOrConnectWithoutPenilaianGarjasDidapatkanInput
    upsert?: UserUpsertWithoutPenilaianGarjasDidapatkanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPenilaianGarjasDidapatkanInput, UserUpdateWithoutPenilaianGarjasDidapatkanInput>, UserUncheckedUpdateWithoutPenilaianGarjasDidapatkanInput>
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type GarjasCreateNestedManyWithoutPenilaiInput = {
    create?: XOR<GarjasCreateWithoutPenilaiInput, GarjasUncheckedCreateWithoutPenilaiInput> | GarjasCreateWithoutPenilaiInput[] | GarjasUncheckedCreateWithoutPenilaiInput[]
    connectOrCreate?: GarjasCreateOrConnectWithoutPenilaiInput | GarjasCreateOrConnectWithoutPenilaiInput[]
    createMany?: GarjasCreateManyPenilaiInputEnvelope
    connect?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
  }

  export type GarjasCreateNestedManyWithoutPrajuritInput = {
    create?: XOR<GarjasCreateWithoutPrajuritInput, GarjasUncheckedCreateWithoutPrajuritInput> | GarjasCreateWithoutPrajuritInput[] | GarjasUncheckedCreateWithoutPrajuritInput[]
    connectOrCreate?: GarjasCreateOrConnectWithoutPrajuritInput | GarjasCreateOrConnectWithoutPrajuritInput[]
    createMany?: GarjasCreateManyPrajuritInputEnvelope
    connect?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
  }

  export type KesatuanCreateNestedOneWithoutUsersInput = {
    create?: XOR<KesatuanCreateWithoutUsersInput, KesatuanUncheckedCreateWithoutUsersInput>
    connectOrCreate?: KesatuanCreateOrConnectWithoutUsersInput
    connect?: KesatuanWhereUniqueInput
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type GarjasUncheckedCreateNestedManyWithoutPenilaiInput = {
    create?: XOR<GarjasCreateWithoutPenilaiInput, GarjasUncheckedCreateWithoutPenilaiInput> | GarjasCreateWithoutPenilaiInput[] | GarjasUncheckedCreateWithoutPenilaiInput[]
    connectOrCreate?: GarjasCreateOrConnectWithoutPenilaiInput | GarjasCreateOrConnectWithoutPenilaiInput[]
    createMany?: GarjasCreateManyPenilaiInputEnvelope
    connect?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
  }

  export type GarjasUncheckedCreateNestedManyWithoutPrajuritInput = {
    create?: XOR<GarjasCreateWithoutPrajuritInput, GarjasUncheckedCreateWithoutPrajuritInput> | GarjasCreateWithoutPrajuritInput[] | GarjasUncheckedCreateWithoutPrajuritInput[]
    connectOrCreate?: GarjasCreateOrConnectWithoutPrajuritInput | GarjasCreateOrConnectWithoutPrajuritInput[]
    createMany?: GarjasCreateManyPrajuritInputEnvelope
    connect?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type GarjasUpdateManyWithoutPenilaiNestedInput = {
    create?: XOR<GarjasCreateWithoutPenilaiInput, GarjasUncheckedCreateWithoutPenilaiInput> | GarjasCreateWithoutPenilaiInput[] | GarjasUncheckedCreateWithoutPenilaiInput[]
    connectOrCreate?: GarjasCreateOrConnectWithoutPenilaiInput | GarjasCreateOrConnectWithoutPenilaiInput[]
    upsert?: GarjasUpsertWithWhereUniqueWithoutPenilaiInput | GarjasUpsertWithWhereUniqueWithoutPenilaiInput[]
    createMany?: GarjasCreateManyPenilaiInputEnvelope
    set?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    disconnect?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    delete?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    connect?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    update?: GarjasUpdateWithWhereUniqueWithoutPenilaiInput | GarjasUpdateWithWhereUniqueWithoutPenilaiInput[]
    updateMany?: GarjasUpdateManyWithWhereWithoutPenilaiInput | GarjasUpdateManyWithWhereWithoutPenilaiInput[]
    deleteMany?: GarjasScalarWhereInput | GarjasScalarWhereInput[]
  }

  export type GarjasUpdateManyWithoutPrajuritNestedInput = {
    create?: XOR<GarjasCreateWithoutPrajuritInput, GarjasUncheckedCreateWithoutPrajuritInput> | GarjasCreateWithoutPrajuritInput[] | GarjasUncheckedCreateWithoutPrajuritInput[]
    connectOrCreate?: GarjasCreateOrConnectWithoutPrajuritInput | GarjasCreateOrConnectWithoutPrajuritInput[]
    upsert?: GarjasUpsertWithWhereUniqueWithoutPrajuritInput | GarjasUpsertWithWhereUniqueWithoutPrajuritInput[]
    createMany?: GarjasCreateManyPrajuritInputEnvelope
    set?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    disconnect?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    delete?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    connect?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    update?: GarjasUpdateWithWhereUniqueWithoutPrajuritInput | GarjasUpdateWithWhereUniqueWithoutPrajuritInput[]
    updateMany?: GarjasUpdateManyWithWhereWithoutPrajuritInput | GarjasUpdateManyWithWhereWithoutPrajuritInput[]
    deleteMany?: GarjasScalarWhereInput | GarjasScalarWhereInput[]
  }

  export type KesatuanUpdateOneWithoutUsersNestedInput = {
    create?: XOR<KesatuanCreateWithoutUsersInput, KesatuanUncheckedCreateWithoutUsersInput>
    connectOrCreate?: KesatuanCreateOrConnectWithoutUsersInput
    upsert?: KesatuanUpsertWithoutUsersInput
    disconnect?: KesatuanWhereInput | boolean
    delete?: KesatuanWhereInput | boolean
    connect?: KesatuanWhereUniqueInput
    update?: XOR<XOR<KesatuanUpdateToOneWithWhereWithoutUsersInput, KesatuanUpdateWithoutUsersInput>, KesatuanUncheckedUpdateWithoutUsersInput>
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type GarjasUncheckedUpdateManyWithoutPenilaiNestedInput = {
    create?: XOR<GarjasCreateWithoutPenilaiInput, GarjasUncheckedCreateWithoutPenilaiInput> | GarjasCreateWithoutPenilaiInput[] | GarjasUncheckedCreateWithoutPenilaiInput[]
    connectOrCreate?: GarjasCreateOrConnectWithoutPenilaiInput | GarjasCreateOrConnectWithoutPenilaiInput[]
    upsert?: GarjasUpsertWithWhereUniqueWithoutPenilaiInput | GarjasUpsertWithWhereUniqueWithoutPenilaiInput[]
    createMany?: GarjasCreateManyPenilaiInputEnvelope
    set?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    disconnect?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    delete?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    connect?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    update?: GarjasUpdateWithWhereUniqueWithoutPenilaiInput | GarjasUpdateWithWhereUniqueWithoutPenilaiInput[]
    updateMany?: GarjasUpdateManyWithWhereWithoutPenilaiInput | GarjasUpdateManyWithWhereWithoutPenilaiInput[]
    deleteMany?: GarjasScalarWhereInput | GarjasScalarWhereInput[]
  }

  export type GarjasUncheckedUpdateManyWithoutPrajuritNestedInput = {
    create?: XOR<GarjasCreateWithoutPrajuritInput, GarjasUncheckedCreateWithoutPrajuritInput> | GarjasCreateWithoutPrajuritInput[] | GarjasUncheckedCreateWithoutPrajuritInput[]
    connectOrCreate?: GarjasCreateOrConnectWithoutPrajuritInput | GarjasCreateOrConnectWithoutPrajuritInput[]
    upsert?: GarjasUpsertWithWhereUniqueWithoutPrajuritInput | GarjasUpsertWithWhereUniqueWithoutPrajuritInput[]
    createMany?: GarjasCreateManyPrajuritInputEnvelope
    set?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    disconnect?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    delete?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    connect?: GarjasWhereUniqueInput | GarjasWhereUniqueInput[]
    update?: GarjasUpdateWithWhereUniqueWithoutPrajuritInput | GarjasUpdateWithWhereUniqueWithoutPrajuritInput[]
    updateMany?: GarjasUpdateManyWithWhereWithoutPrajuritInput | GarjasUpdateManyWithWhereWithoutPrajuritInput[]
    deleteMany?: GarjasScalarWhereInput | GarjasScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutKesatuanInput = {
    create?: XOR<UserCreateWithoutKesatuanInput, UserUncheckedCreateWithoutKesatuanInput> | UserCreateWithoutKesatuanInput[] | UserUncheckedCreateWithoutKesatuanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKesatuanInput | UserCreateOrConnectWithoutKesatuanInput[]
    createMany?: UserCreateManyKesatuanInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutKesatuanInput = {
    create?: XOR<UserCreateWithoutKesatuanInput, UserUncheckedCreateWithoutKesatuanInput> | UserCreateWithoutKesatuanInput[] | UserUncheckedCreateWithoutKesatuanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKesatuanInput | UserCreateOrConnectWithoutKesatuanInput[]
    createMany?: UserCreateManyKesatuanInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutKesatuanNestedInput = {
    create?: XOR<UserCreateWithoutKesatuanInput, UserUncheckedCreateWithoutKesatuanInput> | UserCreateWithoutKesatuanInput[] | UserUncheckedCreateWithoutKesatuanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKesatuanInput | UserCreateOrConnectWithoutKesatuanInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutKesatuanInput | UserUpsertWithWhereUniqueWithoutKesatuanInput[]
    createMany?: UserCreateManyKesatuanInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutKesatuanInput | UserUpdateWithWhereUniqueWithoutKesatuanInput[]
    updateMany?: UserUpdateManyWithWhereWithoutKesatuanInput | UserUpdateManyWithWhereWithoutKesatuanInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutKesatuanNestedInput = {
    create?: XOR<UserCreateWithoutKesatuanInput, UserUncheckedCreateWithoutKesatuanInput> | UserCreateWithoutKesatuanInput[] | UserUncheckedCreateWithoutKesatuanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKesatuanInput | UserCreateOrConnectWithoutKesatuanInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutKesatuanInput | UserUpsertWithWhereUniqueWithoutKesatuanInput[]
    createMany?: UserCreateManyKesatuanInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutKesatuanInput | UserUpdateWithWhereUniqueWithoutKesatuanInput[]
    updateMany?: UserUpdateManyWithWhereWithoutKesatuanInput | UserUpdateManyWithWhereWithoutKesatuanInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokenInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutRefreshTokenNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    upsert?: UserUpsertWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokenInput, UserUpdateWithoutRefreshTokenInput>, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutPenilaianGarjasDibuatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    username: string
    password: string
    avatar?: string | null
    lastLogin?: Date | string | null
    role: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    penilaianGarjasDidapatkan?: GarjasCreateNestedManyWithoutPrajuritInput
    kesatuan?: KesatuanCreateNestedOneWithoutUsersInput
    RefreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPenilaianGarjasDibuatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    username: string
    password: string
    avatar?: string | null
    lastLogin?: Date | string | null
    role: $Enums.Role
    kesatuanId?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    penilaianGarjasDidapatkan?: GarjasUncheckedCreateNestedManyWithoutPrajuritInput
    RefreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPenilaianGarjasDibuatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPenilaianGarjasDibuatInput, UserUncheckedCreateWithoutPenilaianGarjasDibuatInput>
  }

  export type UserCreateWithoutPenilaianGarjasDidapatkanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    username: string
    password: string
    avatar?: string | null
    lastLogin?: Date | string | null
    role: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    penilaianGarjasDibuat?: GarjasCreateNestedManyWithoutPenilaiInput
    kesatuan?: KesatuanCreateNestedOneWithoutUsersInput
    RefreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPenilaianGarjasDidapatkanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    username: string
    password: string
    avatar?: string | null
    lastLogin?: Date | string | null
    role: $Enums.Role
    kesatuanId?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    penilaianGarjasDibuat?: GarjasUncheckedCreateNestedManyWithoutPenilaiInput
    RefreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPenilaianGarjasDidapatkanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPenilaianGarjasDidapatkanInput, UserUncheckedCreateWithoutPenilaianGarjasDidapatkanInput>
  }

  export type UserUpsertWithoutPenilaianGarjasDibuatInput = {
    update: XOR<UserUpdateWithoutPenilaianGarjasDibuatInput, UserUncheckedUpdateWithoutPenilaianGarjasDibuatInput>
    create: XOR<UserCreateWithoutPenilaianGarjasDibuatInput, UserUncheckedCreateWithoutPenilaianGarjasDibuatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPenilaianGarjasDibuatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPenilaianGarjasDibuatInput, UserUncheckedUpdateWithoutPenilaianGarjasDibuatInput>
  }

  export type UserUpdateWithoutPenilaianGarjasDibuatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    penilaianGarjasDidapatkan?: GarjasUpdateManyWithoutPrajuritNestedInput
    kesatuan?: KesatuanUpdateOneWithoutUsersNestedInput
    RefreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPenilaianGarjasDibuatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kesatuanId?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    penilaianGarjasDidapatkan?: GarjasUncheckedUpdateManyWithoutPrajuritNestedInput
    RefreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutPenilaianGarjasDidapatkanInput = {
    update: XOR<UserUpdateWithoutPenilaianGarjasDidapatkanInput, UserUncheckedUpdateWithoutPenilaianGarjasDidapatkanInput>
    create: XOR<UserCreateWithoutPenilaianGarjasDidapatkanInput, UserUncheckedCreateWithoutPenilaianGarjasDidapatkanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPenilaianGarjasDidapatkanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPenilaianGarjasDidapatkanInput, UserUncheckedUpdateWithoutPenilaianGarjasDidapatkanInput>
  }

  export type UserUpdateWithoutPenilaianGarjasDidapatkanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    penilaianGarjasDibuat?: GarjasUpdateManyWithoutPenilaiNestedInput
    kesatuan?: KesatuanUpdateOneWithoutUsersNestedInput
    RefreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPenilaianGarjasDidapatkanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kesatuanId?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    penilaianGarjasDibuat?: GarjasUncheckedUpdateManyWithoutPenilaiNestedInput
    RefreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    umur: number
    jenisKelamin: string
    golongan: number
    pangkat: string
    beratBadan?: number | null
    tinggiBadan?: number | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    umur: number
    jenisKelamin: string
    golongan: number
    pangkat: string
    beratBadan?: number | null
    tinggiBadan?: number | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type GarjasCreateWithoutPenilaiInput = {
    tanggal?: Date | string
    lari: number
    garjasA: number
    pullup?: number | null
    shuttleRun: number
    renang?: number | null
    situp?: number | null
    pushup?: number | null
    pangkat: string
    skorB1: number
    skorB2: number
    skorB3: number
    skorB4: number
    garjasB: number
    nilaiAkhir: number
    prajurit: UserCreateNestedOneWithoutPenilaianGarjasDidapatkanInput
  }

  export type GarjasUncheckedCreateWithoutPenilaiInput = {
    id?: number
    tanggal?: Date | string
    lari: number
    garjasA: number
    pullup?: number | null
    shuttleRun: number
    renang?: number | null
    situp?: number | null
    pushup?: number | null
    pangkat: string
    skorB1: number
    skorB2: number
    skorB3: number
    skorB4: number
    garjasB: number
    nilaiAkhir: number
    prajuritId: string
  }

  export type GarjasCreateOrConnectWithoutPenilaiInput = {
    where: GarjasWhereUniqueInput
    create: XOR<GarjasCreateWithoutPenilaiInput, GarjasUncheckedCreateWithoutPenilaiInput>
  }

  export type GarjasCreateManyPenilaiInputEnvelope = {
    data: GarjasCreateManyPenilaiInput | GarjasCreateManyPenilaiInput[]
    skipDuplicates?: boolean
  }

  export type GarjasCreateWithoutPrajuritInput = {
    tanggal?: Date | string
    lari: number
    garjasA: number
    pullup?: number | null
    shuttleRun: number
    renang?: number | null
    situp?: number | null
    pushup?: number | null
    pangkat: string
    skorB1: number
    skorB2: number
    skorB3: number
    skorB4: number
    garjasB: number
    nilaiAkhir: number
    penilai: UserCreateNestedOneWithoutPenilaianGarjasDibuatInput
  }

  export type GarjasUncheckedCreateWithoutPrajuritInput = {
    id?: number
    tanggal?: Date | string
    lari: number
    garjasA: number
    pullup?: number | null
    shuttleRun: number
    renang?: number | null
    situp?: number | null
    pushup?: number | null
    pangkat: string
    skorB1: number
    skorB2: number
    skorB3: number
    skorB4: number
    garjasB: number
    nilaiAkhir: number
    penilaiId: string
  }

  export type GarjasCreateOrConnectWithoutPrajuritInput = {
    where: GarjasWhereUniqueInput
    create: XOR<GarjasCreateWithoutPrajuritInput, GarjasUncheckedCreateWithoutPrajuritInput>
  }

  export type GarjasCreateManyPrajuritInputEnvelope = {
    data: GarjasCreateManyPrajuritInput | GarjasCreateManyPrajuritInput[]
    skipDuplicates?: boolean
  }

  export type KesatuanCreateWithoutUsersInput = {
    id?: string
    nama: string
    motto?: string | null
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KesatuanUncheckedCreateWithoutUsersInput = {
    id?: string
    nama: string
    motto?: string | null
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KesatuanCreateOrConnectWithoutUsersInput = {
    where: KesatuanWhereUniqueInput
    create: XOR<KesatuanCreateWithoutUsersInput, KesatuanUncheckedCreateWithoutUsersInput>
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    revoked?: boolean
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    revoked?: boolean
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    umur?: IntFieldUpdateOperationsInput | number
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    golongan?: IntFieldUpdateOperationsInput | number
    pangkat?: StringFieldUpdateOperationsInput | string
    beratBadan?: NullableIntFieldUpdateOperationsInput | number | null
    tinggiBadan?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    umur?: IntFieldUpdateOperationsInput | number
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    golongan?: IntFieldUpdateOperationsInput | number
    pangkat?: StringFieldUpdateOperationsInput | string
    beratBadan?: NullableIntFieldUpdateOperationsInput | number | null
    tinggiBadan?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GarjasUpsertWithWhereUniqueWithoutPenilaiInput = {
    where: GarjasWhereUniqueInput
    update: XOR<GarjasUpdateWithoutPenilaiInput, GarjasUncheckedUpdateWithoutPenilaiInput>
    create: XOR<GarjasCreateWithoutPenilaiInput, GarjasUncheckedCreateWithoutPenilaiInput>
  }

  export type GarjasUpdateWithWhereUniqueWithoutPenilaiInput = {
    where: GarjasWhereUniqueInput
    data: XOR<GarjasUpdateWithoutPenilaiInput, GarjasUncheckedUpdateWithoutPenilaiInput>
  }

  export type GarjasUpdateManyWithWhereWithoutPenilaiInput = {
    where: GarjasScalarWhereInput
    data: XOR<GarjasUpdateManyMutationInput, GarjasUncheckedUpdateManyWithoutPenilaiInput>
  }

  export type GarjasScalarWhereInput = {
    AND?: GarjasScalarWhereInput | GarjasScalarWhereInput[]
    OR?: GarjasScalarWhereInput[]
    NOT?: GarjasScalarWhereInput | GarjasScalarWhereInput[]
    id?: IntFilter<"Garjas"> | number
    tanggal?: DateTimeFilter<"Garjas"> | Date | string
    lari?: IntFilter<"Garjas"> | number
    garjasA?: FloatFilter<"Garjas"> | number
    pullup?: IntNullableFilter<"Garjas"> | number | null
    shuttleRun?: FloatFilter<"Garjas"> | number
    renang?: IntNullableFilter<"Garjas"> | number | null
    situp?: IntNullableFilter<"Garjas"> | number | null
    pushup?: IntNullableFilter<"Garjas"> | number | null
    pangkat?: StringFilter<"Garjas"> | string
    skorB1?: FloatFilter<"Garjas"> | number
    skorB2?: FloatFilter<"Garjas"> | number
    skorB3?: FloatFilter<"Garjas"> | number
    skorB4?: FloatFilter<"Garjas"> | number
    garjasB?: FloatFilter<"Garjas"> | number
    nilaiAkhir?: FloatFilter<"Garjas"> | number
    penilaiId?: StringFilter<"Garjas"> | string
    prajuritId?: StringFilter<"Garjas"> | string
  }

  export type GarjasUpsertWithWhereUniqueWithoutPrajuritInput = {
    where: GarjasWhereUniqueInput
    update: XOR<GarjasUpdateWithoutPrajuritInput, GarjasUncheckedUpdateWithoutPrajuritInput>
    create: XOR<GarjasCreateWithoutPrajuritInput, GarjasUncheckedCreateWithoutPrajuritInput>
  }

  export type GarjasUpdateWithWhereUniqueWithoutPrajuritInput = {
    where: GarjasWhereUniqueInput
    data: XOR<GarjasUpdateWithoutPrajuritInput, GarjasUncheckedUpdateWithoutPrajuritInput>
  }

  export type GarjasUpdateManyWithWhereWithoutPrajuritInput = {
    where: GarjasScalarWhereInput
    data: XOR<GarjasUpdateManyMutationInput, GarjasUncheckedUpdateManyWithoutPrajuritInput>
  }

  export type KesatuanUpsertWithoutUsersInput = {
    update: XOR<KesatuanUpdateWithoutUsersInput, KesatuanUncheckedUpdateWithoutUsersInput>
    create: XOR<KesatuanCreateWithoutUsersInput, KesatuanUncheckedCreateWithoutUsersInput>
    where?: KesatuanWhereInput
  }

  export type KesatuanUpdateToOneWithWhereWithoutUsersInput = {
    where?: KesatuanWhereInput
    data: XOR<KesatuanUpdateWithoutUsersInput, KesatuanUncheckedUpdateWithoutUsersInput>
  }

  export type KesatuanUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KesatuanUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
  }

  export type UserCreateWithoutKesatuanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    username: string
    password: string
    avatar?: string | null
    lastLogin?: Date | string | null
    role: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    penilaianGarjasDibuat?: GarjasCreateNestedManyWithoutPenilaiInput
    penilaianGarjasDidapatkan?: GarjasCreateNestedManyWithoutPrajuritInput
    RefreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutKesatuanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    username: string
    password: string
    avatar?: string | null
    lastLogin?: Date | string | null
    role: $Enums.Role
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    penilaianGarjasDibuat?: GarjasUncheckedCreateNestedManyWithoutPenilaiInput
    penilaianGarjasDidapatkan?: GarjasUncheckedCreateNestedManyWithoutPrajuritInput
    RefreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutKesatuanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKesatuanInput, UserUncheckedCreateWithoutKesatuanInput>
  }

  export type UserCreateManyKesatuanInputEnvelope = {
    data: UserCreateManyKesatuanInput | UserCreateManyKesatuanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutKesatuanInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutKesatuanInput, UserUncheckedUpdateWithoutKesatuanInput>
    create: XOR<UserCreateWithoutKesatuanInput, UserUncheckedCreateWithoutKesatuanInput>
  }

  export type UserUpdateWithWhereUniqueWithoutKesatuanInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutKesatuanInput, UserUncheckedUpdateWithoutKesatuanInput>
  }

  export type UserUpdateManyWithWhereWithoutKesatuanInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutKesatuanInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    kesatuanId?: StringNullableFilter<"User"> | string | null
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    username: string
    password: string
    avatar?: string | null
    lastLogin?: Date | string | null
    role: $Enums.Role
    penilaianGarjasDibuat?: GarjasCreateNestedManyWithoutPenilaiInput
    penilaianGarjasDidapatkan?: GarjasCreateNestedManyWithoutPrajuritInput
    kesatuan?: KesatuanCreateNestedOneWithoutUsersInput
    RefreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    username: string
    password: string
    avatar?: string | null
    lastLogin?: Date | string | null
    role: $Enums.Role
    kesatuanId?: string | null
    penilaianGarjasDibuat?: GarjasUncheckedCreateNestedManyWithoutPenilaiInput
    penilaianGarjasDidapatkan?: GarjasUncheckedCreateNestedManyWithoutPrajuritInput
    RefreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    penilaianGarjasDibuat?: GarjasUpdateManyWithoutPenilaiNestedInput
    penilaianGarjasDidapatkan?: GarjasUpdateManyWithoutPrajuritNestedInput
    kesatuan?: KesatuanUpdateOneWithoutUsersNestedInput
    RefreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kesatuanId?: NullableStringFieldUpdateOperationsInput | string | null
    penilaianGarjasDibuat?: GarjasUncheckedUpdateManyWithoutPenilaiNestedInput
    penilaianGarjasDidapatkan?: GarjasUncheckedUpdateManyWithoutPrajuritNestedInput
    RefreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRefreshTokenInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    username: string
    password: string
    avatar?: string | null
    lastLogin?: Date | string | null
    role: $Enums.Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    penilaianGarjasDibuat?: GarjasCreateNestedManyWithoutPenilaiInput
    penilaianGarjasDidapatkan?: GarjasCreateNestedManyWithoutPrajuritInput
    kesatuan?: KesatuanCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRefreshTokenInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    username: string
    password: string
    avatar?: string | null
    lastLogin?: Date | string | null
    role: $Enums.Role
    kesatuanId?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    penilaianGarjasDibuat?: GarjasUncheckedCreateNestedManyWithoutPenilaiInput
    penilaianGarjasDidapatkan?: GarjasUncheckedCreateNestedManyWithoutPrajuritInput
  }

  export type UserCreateOrConnectWithoutRefreshTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
  }

  export type UserUpsertWithoutRefreshTokenInput = {
    update: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type UserUpdateWithoutRefreshTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    penilaianGarjasDibuat?: GarjasUpdateManyWithoutPenilaiNestedInput
    penilaianGarjasDidapatkan?: GarjasUpdateManyWithoutPrajuritNestedInput
    kesatuan?: KesatuanUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    kesatuanId?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    penilaianGarjasDibuat?: GarjasUncheckedUpdateManyWithoutPenilaiNestedInput
    penilaianGarjasDidapatkan?: GarjasUncheckedUpdateManyWithoutPrajuritNestedInput
  }

  export type GarjasCreateManyPenilaiInput = {
    id?: number
    tanggal?: Date | string
    lari: number
    garjasA: number
    pullup?: number | null
    shuttleRun: number
    renang?: number | null
    situp?: number | null
    pushup?: number | null
    pangkat: string
    skorB1: number
    skorB2: number
    skorB3: number
    skorB4: number
    garjasB: number
    nilaiAkhir: number
    prajuritId: string
  }

  export type GarjasCreateManyPrajuritInput = {
    id?: number
    tanggal?: Date | string
    lari: number
    garjasA: number
    pullup?: number | null
    shuttleRun: number
    renang?: number | null
    situp?: number | null
    pushup?: number | null
    pangkat: string
    skorB1: number
    skorB2: number
    skorB3: number
    skorB4: number
    garjasB: number
    nilaiAkhir: number
    penilaiId: string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    revoked?: boolean
  }

  export type GarjasUpdateWithoutPenilaiInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lari?: IntFieldUpdateOperationsInput | number
    garjasA?: FloatFieldUpdateOperationsInput | number
    pullup?: NullableIntFieldUpdateOperationsInput | number | null
    shuttleRun?: FloatFieldUpdateOperationsInput | number
    renang?: NullableIntFieldUpdateOperationsInput | number | null
    situp?: NullableIntFieldUpdateOperationsInput | number | null
    pushup?: NullableIntFieldUpdateOperationsInput | number | null
    pangkat?: StringFieldUpdateOperationsInput | string
    skorB1?: FloatFieldUpdateOperationsInput | number
    skorB2?: FloatFieldUpdateOperationsInput | number
    skorB3?: FloatFieldUpdateOperationsInput | number
    skorB4?: FloatFieldUpdateOperationsInput | number
    garjasB?: FloatFieldUpdateOperationsInput | number
    nilaiAkhir?: FloatFieldUpdateOperationsInput | number
    prajurit?: UserUpdateOneRequiredWithoutPenilaianGarjasDidapatkanNestedInput
  }

  export type GarjasUncheckedUpdateWithoutPenilaiInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lari?: IntFieldUpdateOperationsInput | number
    garjasA?: FloatFieldUpdateOperationsInput | number
    pullup?: NullableIntFieldUpdateOperationsInput | number | null
    shuttleRun?: FloatFieldUpdateOperationsInput | number
    renang?: NullableIntFieldUpdateOperationsInput | number | null
    situp?: NullableIntFieldUpdateOperationsInput | number | null
    pushup?: NullableIntFieldUpdateOperationsInput | number | null
    pangkat?: StringFieldUpdateOperationsInput | string
    skorB1?: FloatFieldUpdateOperationsInput | number
    skorB2?: FloatFieldUpdateOperationsInput | number
    skorB3?: FloatFieldUpdateOperationsInput | number
    skorB4?: FloatFieldUpdateOperationsInput | number
    garjasB?: FloatFieldUpdateOperationsInput | number
    nilaiAkhir?: FloatFieldUpdateOperationsInput | number
    prajuritId?: StringFieldUpdateOperationsInput | string
  }

  export type GarjasUncheckedUpdateManyWithoutPenilaiInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lari?: IntFieldUpdateOperationsInput | number
    garjasA?: FloatFieldUpdateOperationsInput | number
    pullup?: NullableIntFieldUpdateOperationsInput | number | null
    shuttleRun?: FloatFieldUpdateOperationsInput | number
    renang?: NullableIntFieldUpdateOperationsInput | number | null
    situp?: NullableIntFieldUpdateOperationsInput | number | null
    pushup?: NullableIntFieldUpdateOperationsInput | number | null
    pangkat?: StringFieldUpdateOperationsInput | string
    skorB1?: FloatFieldUpdateOperationsInput | number
    skorB2?: FloatFieldUpdateOperationsInput | number
    skorB3?: FloatFieldUpdateOperationsInput | number
    skorB4?: FloatFieldUpdateOperationsInput | number
    garjasB?: FloatFieldUpdateOperationsInput | number
    nilaiAkhir?: FloatFieldUpdateOperationsInput | number
    prajuritId?: StringFieldUpdateOperationsInput | string
  }

  export type GarjasUpdateWithoutPrajuritInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lari?: IntFieldUpdateOperationsInput | number
    garjasA?: FloatFieldUpdateOperationsInput | number
    pullup?: NullableIntFieldUpdateOperationsInput | number | null
    shuttleRun?: FloatFieldUpdateOperationsInput | number
    renang?: NullableIntFieldUpdateOperationsInput | number | null
    situp?: NullableIntFieldUpdateOperationsInput | number | null
    pushup?: NullableIntFieldUpdateOperationsInput | number | null
    pangkat?: StringFieldUpdateOperationsInput | string
    skorB1?: FloatFieldUpdateOperationsInput | number
    skorB2?: FloatFieldUpdateOperationsInput | number
    skorB3?: FloatFieldUpdateOperationsInput | number
    skorB4?: FloatFieldUpdateOperationsInput | number
    garjasB?: FloatFieldUpdateOperationsInput | number
    nilaiAkhir?: FloatFieldUpdateOperationsInput | number
    penilai?: UserUpdateOneRequiredWithoutPenilaianGarjasDibuatNestedInput
  }

  export type GarjasUncheckedUpdateWithoutPrajuritInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lari?: IntFieldUpdateOperationsInput | number
    garjasA?: FloatFieldUpdateOperationsInput | number
    pullup?: NullableIntFieldUpdateOperationsInput | number | null
    shuttleRun?: FloatFieldUpdateOperationsInput | number
    renang?: NullableIntFieldUpdateOperationsInput | number | null
    situp?: NullableIntFieldUpdateOperationsInput | number | null
    pushup?: NullableIntFieldUpdateOperationsInput | number | null
    pangkat?: StringFieldUpdateOperationsInput | string
    skorB1?: FloatFieldUpdateOperationsInput | number
    skorB2?: FloatFieldUpdateOperationsInput | number
    skorB3?: FloatFieldUpdateOperationsInput | number
    skorB4?: FloatFieldUpdateOperationsInput | number
    garjasB?: FloatFieldUpdateOperationsInput | number
    nilaiAkhir?: FloatFieldUpdateOperationsInput | number
    penilaiId?: StringFieldUpdateOperationsInput | string
  }

  export type GarjasUncheckedUpdateManyWithoutPrajuritInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lari?: IntFieldUpdateOperationsInput | number
    garjasA?: FloatFieldUpdateOperationsInput | number
    pullup?: NullableIntFieldUpdateOperationsInput | number | null
    shuttleRun?: FloatFieldUpdateOperationsInput | number
    renang?: NullableIntFieldUpdateOperationsInput | number | null
    situp?: NullableIntFieldUpdateOperationsInput | number | null
    pushup?: NullableIntFieldUpdateOperationsInput | number | null
    pangkat?: StringFieldUpdateOperationsInput | string
    skorB1?: FloatFieldUpdateOperationsInput | number
    skorB2?: FloatFieldUpdateOperationsInput | number
    skorB3?: FloatFieldUpdateOperationsInput | number
    skorB4?: FloatFieldUpdateOperationsInput | number
    garjasB?: FloatFieldUpdateOperationsInput | number
    nilaiAkhir?: FloatFieldUpdateOperationsInput | number
    penilaiId?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyKesatuanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    username: string
    password: string
    avatar?: string | null
    lastLogin?: Date | string | null
    role: $Enums.Role
  }

  export type UserUpdateWithoutKesatuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUpdateOneWithoutUserNestedInput
    penilaianGarjasDibuat?: GarjasUpdateManyWithoutPenilaiNestedInput
    penilaianGarjasDidapatkan?: GarjasUpdateManyWithoutPrajuritNestedInput
    RefreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutKesatuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    penilaianGarjasDibuat?: GarjasUncheckedUpdateManyWithoutPenilaiNestedInput
    penilaianGarjasDidapatkan?: GarjasUncheckedUpdateManyWithoutPrajuritNestedInput
    RefreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutKesatuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}