---
title: Introduction to Topology
tags: [topology, foundations, math]
aliases: [topology intro, basic topology]
created: 2024-01-15
---

# What is Topology?

**Topology** is the study of properties preserved under *continuous deformations*. Unlike geometry, topology doesn't care about exact distances or angles.

## Key Concepts

A **topological space** is a set $X$ together with a collection $\tau$ of subsets called *open sets* satisfying:

1. $\emptyset, X \in \tau$
2. Arbitrary unions of open sets are open
3. Finite intersections of open sets are open

$$
\tau \subseteq \mathcal{P}(X)
$$

## Related Topics

- [[Metric Spaces]] provide a concrete way to define topology
- [[Continuous Functions]] preserve topological structure
- [[Convergence of Sequences]] behaves differently in general spaces

> [!note] Historical Note
> Topology emerged from analysis in the early 20th century, particularly from the work of Hausdorff and others.

## Basic Examples

1. **Discrete topology**: Every subset is open
2. **Indiscrete topology**: Only $\emptyset$ and $X$ are open
3. **Metric topology**: Open balls generate the topology
