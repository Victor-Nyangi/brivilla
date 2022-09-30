<template>
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant">{{cocktail.name}}</p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{{cocktail.selling_price}}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans">{{cocktail.contents}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: ['cocktail']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.p__cormorant {
    font-family: 'Cormorant Upright', serif;
    color: #443e79
}

.p__opensans {
  color: #AAAAAA;
  font-family: 'Open Sans', sans-serif;
}
.app__menuitem-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.app__menuitem-sub {
    width: 100%;
    margin-top: 0.2rem;
}

.app__menuitem-name {
    flex: 1;
}

.app__menuitem-dash {
    width: 90px;
    height: 1px;
    background: var(--color-golden);
    margin: 0 1rem;
}

.app__menuitem-price {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
</style>
