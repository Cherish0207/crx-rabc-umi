/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-mutable-exports */
let CURRENT: string | string[] = 'NULL';

type CurrentAuthorityType = string | string[] | (() => typeof CURRENT);
/**
 * Use authority or getAuthority
 *
 * @param {string|()=>String} currentAuthority
 */
// renderAuthorize=[admin] CURRENT=[admin] 取当权localstorage最新值currentAuthority 传给CURRENT
const renderAuthorize = <T>(Authorized: T): ((currentAuthority: CurrentAuthorityType) => T) => (
  currentAuthority: CurrentAuthorityType,
): T => {
  if (currentAuthority) {
    if (typeof currentAuthority === 'function') {
      CURRENT = currentAuthority();
    }
    if (
      Object.prototype.toString.call(currentAuthority) === '[object String]' ||
      Array.isArray(currentAuthority)
    ) {
      CURRENT = currentAuthority as string[];
    }
  } else {
    CURRENT = 'NULL';
  }
  return Authorized;
};

export { CURRENT };
export default <T>(Authorized: T) => renderAuthorize<T>(Authorized);
