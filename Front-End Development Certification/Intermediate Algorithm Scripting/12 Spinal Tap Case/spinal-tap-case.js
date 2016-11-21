function spinalCase(str) {
  
  return str.replace(/\s/g, "-").replace(/_/g, "-").replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  
}