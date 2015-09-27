package com.bulletproof.cupid.coins.repository;

import com.bulletproof.cupid.coins.domain.Coin;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class CoinRepository {
    @Autowired
    private SessionFactory sessionFactory;

    public List<Coin> getCoins() {
        List<Coin> coins = sessionFactory.getCurrentSession().createQuery("FROM Coin").list();
        return coins;
    }

    public Coin getCoinById(Long id) {
        return (Coin)sessionFactory.getCurrentSession().createQuery("FROM Coin coin WHERE coin.id = :id").setString("id", String.valueOf(id)).uniqueResult();
    }

    public Coin update(Coin coin) {
        Session session = sessionFactory.getCurrentSession();
        session.merge(coin);
        return coin;
    }

    public void delete(Coin coin) {
        sessionFactory.getCurrentSession().delete(coin);
    }
}