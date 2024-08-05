'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';

type tagPickerProps = {
  tags: string[];
  onChange?: (tags: string[]) => void;
  defaultTags: string[];
  onAddTag?: (tag: string) => void;
  className?: string;
};

export const TagPicker: React.FC<tagPickerProps> = ({ tags, defaultTags, onChange, className }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(defaultTags);
  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  return (
    <div className={cn('flex gap-2', className)}>
      {tags.map((tag) => (
        <button
          key={tag}
          className={cn(
            `rounded-md border border-border px-2 py-1 transition-colors duration-300 hover:bg-primary hover:text-primary-foreground`,
            selectedTags.includes(tag) ? 'bg-primary text-primary-foreground' : 'bg-background',
          )}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

type tagProps = {
  name: string;
  key: string;
  onClick: () => void;
  className?: string;
};

export const Tag: React.FC<tagProps> = ({ name, key, className, onClick }) => {
  return (
    <button
      key={key}
      className={cn(
        `rounded-md border border-border px-2 py-1 transition-colors duration-300 hover:bg-primary 
            hover:text-primary-foreground`,
        className,
      )}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
