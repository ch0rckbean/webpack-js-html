export function msg(m) {
  const ele = document.createElement('p');
  ele.innerHTML = m;
  document.body.append(ele);
}
