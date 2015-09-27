package com.bulletproof.cupid.coins.service;

import com.bulletproof.cupid.coins.domain.Coin;
import com.bulletproof.cupid.coins.repository.CoinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoinServiceImpl implements CoinService {
    @Autowired
    CoinRepository repository;

    @Override
    public void save(Coin coin) {

    }

    @Override
    public Coin fetch(Long id) {
        return repository.getCoinById(id);
    }

    @Override
    public void delete(Long id) {
        Coin coin = repository.getCoinById(id);
        repository.delete(coin);
    }

    @Override
    public Coin update(Coin coin) {
        return repository.update(coin);
    }

    @Override
    public List<Coin> getAll() {
        System.out.println("within getAll()");
        return repository.getCoins();
    }
}