import { PokemonDraftLeaguePage } from './app.po';

describe('pokemon-draft-league App', function() {
  let page: PokemonDraftLeaguePage;

  beforeEach(() => {
    page = new PokemonDraftLeaguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
