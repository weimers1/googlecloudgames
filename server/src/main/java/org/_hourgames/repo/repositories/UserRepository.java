package org._hourgames.repo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org._hourgames.repo.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}