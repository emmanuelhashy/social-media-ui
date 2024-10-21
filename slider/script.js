Flickity.createMethods.push('_createPrevNextCells');

Flickity.prototype._createPrevNextCells = function() {
  this.on( 'cellSelect', this.setPrevNextCells );
};

Flickity.prototype.setPrevNextCells = function() {
  // remove classes
  if ( this.previousCell ) {
    classie.remove( this.previousCell.element, 'is-previous' );
  }
  if ( this.nextCell ) {
    classie.remove( this.nextCell.element, 'is-next' );
  }
  // set cells
  this.previousCell = this.cells[ this.selectedIndex - 1 ];
  this.nextCell = this.cells[ this.selectedIndex + 1 ];
  // add classes
  if ( this.previousCell ) {
    classie.add( this.previousCell.element, 'is-previous' );
  }
  if ( this.nextCell ) {
    classie.add( this.nextCell.element, 'is-next' );
  }
};

$('.gallery').flickity({
  
  cellAlign: 'center',
  setGallerySize: false,
  wrapAround: true,
  //prevNextButtons: false,
  pageDots: false,
  freeScroll: true
  
});