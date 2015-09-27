package com.bulletproof.cupid.coins.service;

import com.bulletproof.cupid.coins.domain.Coin;

import java.util.List;

public interface CoinService {
    public void save(Coin coin);
    public Coin fetch(Long id);
    public void delete(Long id);
    public Coin update(Coin coin);
    public List<Coin> getAll();
}